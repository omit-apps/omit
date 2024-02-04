import * as React from "react";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { useKeyboardRegister } from "../hooks/use-keyboard";

import Editor from "./page/editor/editor";
import Home from "./page/home/home";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <Routes location={"/home"}>
      <Route path="/" element={<Editor />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Main;
