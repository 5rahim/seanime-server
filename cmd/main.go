package main

import (
	"fmt"
	"github.com/seanime-app/seanime/internal/core"
	"github.com/seanime-app/seanime/internal/cron"
	"github.com/seanime-app/seanime/internal/handlers"
	"github.com/seanime-app/seanime/internal/updater"
	"time"
)

func main() {

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
			// Print the header
			core.PrintHeader()

			// Run the self-updater
			err := selfupdater.Run()
			if err != nil {
				fmt.Printf("Error: %v", err)
			}

			break appLoop
		case false:
			// Create the app instance
			app := core.NewApp(&core.ConfigOptions{
				DataDir: flags.DataDir,
			})

			// Create the fiber app instance
			fiberApp := core.NewFiberApp(app)

			// Initialize the routes
			handlers.InitRoutes(app, fiberApp)

			//Run the server
			core.RunServer(app, fiberApp)

			//Run the jobs in the background
			cron.RunJobs(app)

			// FIXME TEST ONLY
			go func() {
				<-time.After(2 * time.Second)
				selfupdater.StartSelfUpdate()
			}()

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
