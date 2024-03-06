import { useKeyboardRegister } from "client/hooks/use-keyboard";
import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ModalContainer from "./modal-container";
import Editor from "./views/editor/editor";
import Home from "./views/home/home";
import Update from "./views/update/update";
import { MenuContainer } from "client/module/menu";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <>
      <ModalContainer />
      <MenuContainer />
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
