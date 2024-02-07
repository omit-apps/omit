import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useKeyboardRegister } from "../hooks/use-keyboard";

import Editor from "./page/editor/editor";
import Home from "./page/home/home";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="home/*" element={<Home />} />
      <Route path="editor/*" element={<Editor />} />
    </Routes>
  );
}

export default Main;
