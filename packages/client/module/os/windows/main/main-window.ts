import { BrowserWindow } from "electron";
import path from "path";

export function createMainWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: "assets/icon.png",
    title: "Any Design - 原型直接生成App",
    width: 1440,
    height: 900,
    titleBarStyle: "hidden",
    darkTheme: true,
    autoHideMenuBar: true,
    show: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // contextIsolation: false,
      // nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Jump white screen the application init.
  mainWindow.webContents.addListener("did-finish-load", () => {
    mainWindow.show();
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return mainWindow;
}
