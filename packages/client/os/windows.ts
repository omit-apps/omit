import { BrowserWindow, ipcMain } from "electron";
import path from "node:path";

ipcMain.on("openModal", (ev, title: string, url: string) => {
  const modal = new BrowserWindow({
    title: title,
    autoHideMenuBar: true,
    width: 300,
    height: 480,
    modal: true,
    parent: BrowserWindow.getFocusedWindow(),
  });

  modal.loadURL(path.join(MAIN_WINDOW_VITE_DEV_SERVER_URL, url));
  modal.show();
});

export function init() {
  // TODO:
}
