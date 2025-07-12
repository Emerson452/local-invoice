import { contextBridge, ipcRenderer } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("✅ Preload chargé !");
console.log("🔍 preload path:", path.join(__dirname, "preload.js"));

contextBridge.exposeInMainWorld("electronAPI", {
  saveClient: (client) => {
    console.log("📨 saveClient called", client);
    ipcRenderer.send("save-client", client);
  },
  loadClients: () => ipcRenderer.invoke("load-clients"),
});
