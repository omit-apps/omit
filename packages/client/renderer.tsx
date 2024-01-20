import { createRoot } from "react-dom/client";
import * as React from "react";
import Main from "./view/main";
import "./appearance/index.scss";
import "virtual:uno.css";

const container = document.querySelector("#app");

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}
