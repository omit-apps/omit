import { BrowserWindow, ipcMain } from "electron";
import path from "node:path";

ipcMain.on("openModal", (ev, options: CreateWindowOptions) => {
  const modal = new BrowserWindow({
    ...options,
    autoHideMenuBar: true,
    width: 300,
    height: 480,
    modal: true,
  });

  const parent = BrowserWindow.getFocusedWindow();
  modal.setParentWindow(parent);
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
