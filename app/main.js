const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ejs = require('ejs')
const pyshell = require('python-shell')
const fs = require('fs')

let mainWindow

process.env.ELECTRON_ENABLE_LOGGING = 1

const BOX_EDGE_LENGTH = 600

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: BOX_EDGE_LENGTH,
    height: BOX_EDGE_LENGTH,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })
  mainWindow.loadFile(path.join(__dirname, 'index.html'))
  mainWindow.webContents.openDevTools()
}

ipcMain.on('form-submit', (_, channel, time) => {
  const text = 'thing to turn to voice'

  pyshell.PythonShell.run('textToSpeech.py', { args: [text] }, (err, _) => {
    if (err) throw err
    const audioURL = 'data:audio/flac;base64,' + fs.readFileSync('./audio_file.flac').toString('base64')
    const templateData = {
      channel: channel,
      time: time,
      audioURL: audioURL
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
})

app.allowRendererProcessReuse = true

app.on('ready', createWindow)
