const { app, BrowserWindow, ipc} = require('electron');
const { join } = require('path');

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 500,
        height: 500,
        show: false,
        autoHideMenuBar: true,
        webPreferences: ({
            preload: join(__dirname, "./preload.js") 
        }),
    });

    window.loadFile(join(__dirname, '../public/index.html'));
    window.on("ready-to-show", window.show);
});
