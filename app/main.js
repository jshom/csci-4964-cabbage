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
}

/**
 * Handle form submission from application
 *
 * @param {String} channel - "science" "zen" or "sports"
 * @param {Number} time - integer num of seconds
 */
ipcMain.on('form-submit', (_, channel, time) => {
  // multiple by two cuz time in seconds, avg speach is 120 wpm, 2 wps.
  // estimating avg word length + punctuation lenght around 10... itll do lol
  const textWidth = Number(time) * 2 * 10
  const rawText = fs.readFileSync(
    path.join(__dirname, 'generated-text', `${channel}.txt`),
    'utf8'
  )
  const initialPoint = Math.round(Math.abs(Math.random() * rawText.length - textWidth))
  const text = rawText.slice(initialPoint, initialPoint + textWidth)
  console.log({text, textLength: text.length, time, initialPoint, channel})

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
