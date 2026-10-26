const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// Používateľské dáta (história, zlé, obľúbené, nastavenia) – funguje v .exe aj pri `npm start`
const DATA_DIR = path.join(app.getPath('userData'), 'data');
const ALLOWED = ['history.json', 'wrong.json', 'favorites.json', 'settings.json'];

function createWindow() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const win = new BrowserWindow({
    width: 1200,
    height: 850,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Odkazy (napr. na gencisearch) otvor v normálnom prehliadači
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.loadFile(path.join(__dirname, 'public', 'index.html'));
}

ipcMain.handle('load-json', async (event, file) => {
  if (!ALLOWED.includes(file)) return null;
  try {
    const filePath = path.join(DATA_DIR, file);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (err) {
    console.error('LOAD ERROR:', err);
    return null;
  }
});

ipcMain.handle('save-json', async (event, { file, data }) => {
  if (!ALLOWED.includes(file)) return false;
  try {
    fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('SAVE ERROR:', err);
    return false;
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
