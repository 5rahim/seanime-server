//go:build (linux || darwin) && !windows

package app

import (
	"embed"
	"fmt"
	"seanime/internal/core"
	"seanime/internal/cron"
	"seanime/internal/handlers"
	"seanime/internal/updater"
	"time"
)

func StartApp(webFS embed.FS) {

	// Print the header
	core.PrintHeader()

	// Get the flags
	flags := core.GetSeanimeFlags()

	selfupdater := updater.NewSelfUpdater()

	updateMode := false
	if flags.Update {
		updateMode = true
	}

appLoop:
	for {
		switch updateMode {
		case true:

			fmt.Println("Running in update mode")

			// Print the header
			core.PrintHeader()

			// Run the self-updater
			err := selfupdater.Run()
			if err != nil {
			}

			fmt.Println("Shutting down in 10 seconds...")
			time.Sleep(10 * time.Second)

			break appLoop
		case false:
			// Create the app instance
			app := core.NewApp(&core.ConfigOptions{
				DataDir: flags.DataDir,
			}, selfupdater)

			// Create the fiber app instance
			fiberApp := core.NewFiberApp(app, &webFS)

			// Initialize the routes
			handlers.InitRoutes(app, fiberApp)

			// Run the server
			core.RunServer(app, fiberApp)

			// Run the jobs in the background
			cron.RunJobs(app)

			select {
			case <-selfupdater.Started():
				app.Cleanup()
				updateMode = true
				break
			}
		}
		continue
	}
}