const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getVersion: () => ipcRenderer.invoke('app-version'),
  loadJSON: (file) => ipcRenderer.invoke('load-json', file),
  saveJSON: (file, data) => ipcRenderer.invoke('save-json', { file, data })
});
