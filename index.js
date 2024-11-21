const { app, BrowserWindow } = require('electron/main');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadURL('http://127.0.0.1:3000/src/index.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});