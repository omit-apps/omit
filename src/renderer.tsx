import { createRoot } from "react-dom/client";
import * as React from "react";
import Main from "./client/main";
import "./index.css";

createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
