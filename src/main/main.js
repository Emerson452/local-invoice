const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173");
}

ipcMain.on("save-client", (event, client) => {
  const filePath = path.join(app.getPath("userData"), "clients.json");
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
  const filePath = path.join(app.getPath("userData"), "clients.json");

  if (!fs.existsSync(filePath)) return [];

  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
});

app.whenReady().then(() => {
  createWindow();
});
