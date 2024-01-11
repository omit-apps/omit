import * as React from "react";
import { useState, ReactElement } from "react";
import "../appearance/main.scss";
import { ipcRenderer } from "electron";

function Main(): ReactElement {
  const [url, setUrl] = useState("");

  const fetchEvent = () => {
    ipcRenderer.send("fetch", url);
    // window.electronAPI.fetchWebData(url);
  };

  return (
    <div className="fetch-container">
      <label htmlFor="">抓取的网站:</label>
      <input type="text" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={fetchEvent}>抓取</button>
    </div>
  );
}

export default Main;
