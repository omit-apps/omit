import { createRoot } from "react-dom/client";
import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

import Main from "./view/main";
import "./appearance/index.scss";
import "virtual:uno.css";

const container = document.querySelector("#app");

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
