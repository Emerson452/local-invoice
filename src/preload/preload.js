const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveClient: (client) => ipcRenderer.send("save-client", client),
  loadClients: () => ipcRenderer.invoke("load-clients"),
});
