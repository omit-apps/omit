import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useKeyboardRegister } from "client/hooks/use-keyboard";

import Editor from "./page/editor/editor";
import Home from "./page/home/home";
import Update from "./page/update/update";
import ModalContainer from "./modal-container";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <>
      <ModalContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home/*" element={<Home />} />
        <Route path="editor/*" element={<Editor />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </>
  );
}

export default Main;
