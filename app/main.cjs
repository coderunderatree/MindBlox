const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
  console.log('App is ready');
  const win = new BrowserWindow({
    fullscreen: false,
    width: 800,
    height: 600,
    backgroundColor: '#2e2c29'
  });

  win.loadURL('https://github.com');
});
