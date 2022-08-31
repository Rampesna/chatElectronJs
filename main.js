const {
    app,
    ipcMain,
    BrowserWindow
} = require('electron')
const path = require('path')
const fs = require('fs');

function createWindow(page) {
    const win = new BrowserWindow({
        width: 1920,
        height: 1200,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    // win.maximize();
    // win.show();
    win.loadFile(`ui/${page}.html`);
}

ipcMain.on('login', (event, token) => {
    if (fs.existsSync('auth.json')) {
        fs.readFile('auth.json', {}, function (error, data) {
            var tokenData = JSON.parse(data);
            tokenData.token = token;
            fs.writeFile('auth.json', JSON.stringify({
                token: token
            }), function (error) {
                return null;
            });
        });
    } else {
        fs.writeFile('auth.json', JSON.stringify({
            token: token
        }), function (error) {
            return null;
        });
    }
})

ipcMain.on('getToken', () => {
    return 'abc';
    return fs.readFile('auth.json', {}, function (error, data) {
        return JSON.parse(data).token;
    });
})

app.whenReady().then(() => {
    if (fs.existsSync('auth.json')) {
        fs.readFile('auth.json', {}, function (error, data) {
            var tokenData = JSON.parse(data);
            if (tokenData.token) {
                createWindow('index');
            } else {
                createWindow('login');
            }
        });
    } else {
        createWindow('login');
    }

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
