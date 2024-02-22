// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchWebData: (url: string) => ipcRenderer.send("fetch", url),
  openModal: (title: string, url: string) =>
    ipcRenderer.send("openModal", title, url),
});