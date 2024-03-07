import { BrowserWindow, ipcMain } from "electron";
import path from "node:path";

const openModalDefaultOptions: Partial<CreateWindowOptions> = {
  width: 300,
  height: 480,
  modal: true,
  autoHideMenuBar: true,
};

export function registerOpenModalEvent() {
  ipcMain.on("openModal", (ev, options: Partial<CreateWindowOptions>) => {
    const parent = BrowserWindow.getFocusedWindow();
    const modal = new BrowserWindow({
      icon: "assets/icon.png",
      ...openModalDefaultOptions,
      ...options,
      parent: parent,
    });

    modal.loadURL(path.join(MAIN_WINDOW_VITE_DEV_SERVER_URL, options.url));
    modal.show();
  });
}

export function registerCreateWindowEvent() {
  ipcMain.on("createWindow", (ev, options: CreateWindowOptions) => {
    const window = new BrowserWindow({
      autoHideMenuBar: true,
      ...options,
    });
    window.loadURL(path.join(MAIN_WINDOW_VITE_DEV_SERVER_URL, options.url));
    window.show();
  });
}
