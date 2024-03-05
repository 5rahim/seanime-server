package core

import (
	"github.com/seanime-app/seanime/internal/anilist"
	"github.com/seanime-app/seanime/internal/autodownloader"
	"github.com/seanime-app/seanime/internal/mpchc"
	"github.com/seanime-app/seanime/internal/mpv"
	"github.com/seanime-app/seanime/internal/qbittorrent"
	"github.com/seanime-app/seanime/internal/scanner"
	"github.com/seanime-app/seanime/internal/vlc"
)

// InitModulesOnce will initialize modules that need to persist.
// This function is called once after the App instance is created.
// The settings of these modules will be set/refreshed in InitOrRefreshModules.
func (a *App) InitModulesOnce() {

	// Auto downloader
	a.AutoDownloader = autodownloader.NewAutoDownloader(&autodownloader.NewAutoDownloaderOptions{
		Logger:            a.Logger,
		QbittorrentClient: a.QBittorrent,
		AnilistCollection: nil, // Will be set and refreshed in app.RefreshAnilistCollection
		Database:          a.Database,
		WSEventManager:    a.WSEventManager,
		AniZipCache:       a.AnizipCache,
	})

	a.AutoDownloader.Start()

	// Auto scanner
	a.AutoScanner = scanner.NewAutoScanner(&scanner.NewAutoScannerOptions{
		Database:             a.Database,
		Enabled:              false,
		AutoDownloader:       a.AutoDownloader,
		AnilistClientWrapper: a.AnilistClientWrapper,
		Logger:               a.Logger,
		WSEventManager:       a.WSEventManager,
	})

	a.AutoScanner.Start()

}

// InitOrRefreshModules will initialize or refresh modules that depend on settings.
// This function is called:
//   - After the App instance is created
//   - After App.Database is initialized
//   - After settings are updated.
func (a *App) InitOrRefreshModules() {

	// Stop watching if already watching
	if a.Watcher != nil {
		a.Watcher.StopWatching()
	}

	// Get settings from database
	settings, err := a.Database.GetSettings()
	if err != nil {
		a.Logger.Warn().Msg("app: Did not initialize modules, no settings found")
		return
	}

	a.Settings = settings // Store settings instance in app

	// +---------------------+
	// |   Module settings   |
	// +---------------------+
	// Refresh settings of modules that were initialized in InitModulesOnce

	// Refresh updater settings
	if settings.Library != nil && a.Updater != nil {
		a.Updater.SetEnabled(!settings.Library.DisableUpdateCheck)
	}

	// Refresh auto scanner settings
	if settings.Library != nil && a.AutoScanner != nil {
		a.AutoScanner.SetEnabled(settings.Library.AutoScan)
	}

	// +---------------------+
	// |    Media Player     |
	// +---------------------+

	if settings.MediaPlayer != nil {
		a.MediaPlayer.VLC = &vlc.VLC{
			Host:     settings.MediaPlayer.Host,
			Port:     settings.MediaPlayer.VlcPort,
			Password: settings.MediaPlayer.VlcPassword,
			Path:     settings.MediaPlayer.VlcPath,
			Logger:   a.Logger,
		}
		a.MediaPlayer.MpcHc = &mpchc.MpcHc{
			Host:   settings.MediaPlayer.Host,
			Port:   settings.MediaPlayer.MpcPort,
			Path:   settings.MediaPlayer.MpcPath,
			Logger: a.Logger,
		}
		a.MediaPlayer.Mpv = mpv.New(a.Logger, settings.MediaPlayer.MpvSocket, settings.MediaPlayer.MpvPath)
	} else {
		a.Logger.Warn().Msg("app: Did not initialize media player module, no settings found")
	}

	// +---------------------+
	// |   Torrent Client    |
	// +---------------------+

	if settings.Torrent != nil {
		a.QBittorrent = qbittorrent.NewClient(&qbittorrent.NewClientOptions{
			Logger:   a.Logger,
			Username: settings.Torrent.QBittorrentUsername,
			Password: settings.Torrent.QBittorrentPassword,
			Port:     settings.Torrent.QBittorrentPort,
			Host:     settings.Torrent.QBittorrentHost,
			Path:     settings.Torrent.QBittorrentPath,
		})
		a.AutoDownloader.QbittorrentClient = a.QBittorrent
	} else {
		a.Logger.Warn().Msg("app: Did not initialize qBittorrent module, no settings found")
	}

	// +---------------------+
	// |   AutoDownloader    |
	// +---------------------+

	// Update Auto Downloader - This runs in a goroutine
	if settings.AutoDownloader != nil {
		a.AutoDownloader.SetSettings(settings.AutoDownloader, settings.Library.TorrentProvider)
	}

	// +---------------------+
	// |   Library Watcher   |
	// +---------------------+

	// Initialize library watcher
	if settings.Library != nil && len(settings.Library.LibraryPath) > 0 {
		a.initLibraryWatcher(settings.Library.LibraryPath)
	} else {
		a.Logger.Warn().Msg("app: Did not initialize watcher module, no settings found")
	}

	// +---------------------+
	// |       AniList       |
	// +---------------------+

	a.initAnilistData()

	a.Logger.Info().Msg("app: Initialized modules")

}

// initLibraryWatcher will initialize the library watcher.
//   - Used by AutoScanner
func (a *App) initLibraryWatcher(path string) {
	// Create a new matcher
	watcher, err := scanner.NewWatcher(&scanner.NewWatcherOptions{
		Logger:         a.Logger,
		WSEventManager: a.WSEventManager,
	})
	if err != nil {
		a.Logger.Error().Err(err).Msg("app: Failed to initialize watcher")
		return
	}

	// Initialize library file watcher
	err = watcher.InitLibraryFileWatcher(&scanner.WatchLibraryFilesOptions{
		LibraryPath: path,
	})
	if err != nil {
		a.Logger.Error().Err(err).Msg("app: Failed to watch library files")
		return
	}

	// Set the watcher
	a.Watcher = watcher

	// Start watching
	a.Watcher.StartWatching(
		func() {
			// Notify the auto scanner when a file action occurs
			a.AutoScanner.Notify()
		})

}

// initAnilistData will initialize the Anilist anime collection and the account.
// This function should be called after App.Database is initialized and after settings are updated.
func (a *App) initAnilistData() {
	a.Logger.Debug().Msg("app: Initializing Anilist data")

	acc, err := a.Database.GetAccount()
	if err != nil {
		return
	}

	if acc.Token == "" || acc.Username == "" {
		return
	}

	// Set account
	a.account = acc

	_, err = a.RefreshAnilistCollection()
	if err != nil {
		a.Logger.Error().Err(err).Msg("app: Failed to fetch Anilist collection")
		return
	}

	a.Logger.Info().Msg("app: Fetched Anilist collection")

}

// UpdateAnilistClientToken will update the Anilist Client Wrapper token.
// This function should be called when a user logs in
func (a *App) UpdateAnilistClientToken(token string) {
	a.AnilistClientWrapper = anilist.NewClientWrapper(token)
}