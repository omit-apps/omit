// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { CreateWindowOptions } from "client/os/windows";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchWebData: (url: string) => ipcRenderer.send("fetch", url),
  window: {
    openModal: (options: CreateWindowOptions) =>
      ipcRenderer.send("openModal", options),
    createWindow: (options: CreateWindowOptions) =>
      ipcRenderer.send("createWindow", options),
  },
});
