const { app, BrowserWindow } = require('electron/main');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: "./icon.png"
    });

    win.loadURL('http://202.31.246.48');
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