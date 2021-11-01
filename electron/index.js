const { app, BrowserWindow, ipc} = require('electron');
const { join } = require('path');

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 310,
        height: 210,
        show: false,
        autoHideMenuBar: true,
        webPreferences: ({
            preload: join(__dirname, "./preload.js") 
        }),
        frame: false,
        transparent: true
    });

    window.loadFile(join(__dirname, '../public/index.html'));
    window.on("ready-to-show", window.show);
    window.removeMenu();
    window.resizable = false;
    window.setAlwaysOnTop(true, 'screen')
});
