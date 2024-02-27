import { BrowserWindow, ipcMain } from "electron";
import path from "node:path";

ipcMain.on("openModal", (ev, options: CreateWindowOptions) => {
  const parent = BrowserWindow.getFocusedWindow();
  const modal = new BrowserWindow({
    icon: "assets/icon.png",
    ...options,
    autoHideMenuBar: true,
    width: 300,
    height: 480,
    modal: true,
    parent: parent,
  });

  modal.loadURL(path.join(MAIN_WINDOW_VITE_DEV_SERVER_URL, options.url));
  modal.show();
});

ipcMain.on("createWindow", (ev, options: CreateWindowOptions) => {
  const window = new BrowserWindow({
    autoHideMenuBar: true,
    ...options,
  });
  window.loadURL(path.join(MAIN_WINDOW_VITE_DEV_SERVER_URL, options.url));
  window.show();
});

export function init() {
  // TODO:
}
