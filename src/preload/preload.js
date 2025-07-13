const { contextBridge, ipcRenderer } = require("electron");

console.log("✅ Preload chargé !");

contextBridge.exposeInMainWorld("electronAPI", {
  saveClient: (client) => {
    console.log("📨 saveClient called", client);
    ipcRenderer.send("save-client", client);
  },
  loadClients: () => ipcRenderer.invoke("load-clients"),
});
