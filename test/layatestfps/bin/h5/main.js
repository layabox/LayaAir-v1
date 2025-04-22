const
{
	BrowserWindow,
	autoUpdater,
	app
} = require('electron');

const path = require('path');

app.on("close", function()
{
	app.quit();
});

app.once('ready', () =>
{
	const options = {
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		backgroundColor: '#FFFFFF',
		webPreferences:
		{
			nodeIntegrationInWorker: false
		},
		useContentSize: true
	}

	mainWindow = new BrowserWindow(options);
	//mainWindow.openDevTools();
	mainWindow.loadURL(path.join(__dirname, "index.html"));
	mainWindow.focus();
});