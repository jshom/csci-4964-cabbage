const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

process.env.ELECTRON_ENABLE_LOGGING = 1

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 2000,
    height: 1500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.maximize()

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.allowRendererProcessReuse = true

app.on('ready', createWindow)
