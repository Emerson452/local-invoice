import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  try {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, "../preload/preload.js"),
      },
    });

    win.loadURL("http://localhost:5173");

    win.webContents.openDevTools();

    console.log("✅ Fenêtre créée avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors de la création de la fenêtre:", err);
  }
}

ipcMain.on("save-client", (event, client) => {
  const filePath = path.join(__dirname, "../../data/clients.json");

  console.log("💾 Enregistrement du client :", client);
  console.log("📁 Fichier cible :", filePath);
  let clients = [];

  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath);
    clients = JSON.parse(rawData);
  }

  clients.push(client);
  fs.writeFileSync(filePath, JSON.stringify(clients, null, 2));
});

ipcMain.handle("load-clients", async () => {
  const filePath = path.join(__dirname, "../../data/clients.json");

  if (!fs.existsSync(filePath)) return [];

  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
});

app.whenReady().then(() => {
  createWindow();
});
