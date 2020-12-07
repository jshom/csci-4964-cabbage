const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ejs = require('ejs')

let mainWindow

process.env.ELECTRON_ENABLE_LOGGING = 1

const BOX_EDGE_LENGTH = 600

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: BOX_EDGE_LENGTH,
    height: BOX_EDGE_LENGTH,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile(path.join(__dirname, 'index.html'))
}

ipcMain.on('form-submit', (_, channel, time) => {
  const templateData = {
    channel: channel,
    time: time,
    audioURL: '__placeholder__'
  }
  ejs.renderFile('./audio.ejs', templateData, (err, htmlString) => {
    if (err) {
      console.error(err)
      htmlString = err
    }
    mainWindow
      .loadURL(
        'data:text/html;charset=utf-8,' +
        encodeURI(htmlString))
  })
})

app.allowRendererProcessReuse = true

app.on('ready', createWindow)
