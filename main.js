const {app, BrowserWindow} = require('electron')
const path = require('path')
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    maxWidth: 1000, 
    maxHeight: 1000,
    resizable: false, 
    maximizable: false, 
    backgroundColor: "#3C44A9",
    autoHideMenuBar:true, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
