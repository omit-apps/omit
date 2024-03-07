import { useKeyboardRegister } from "client/hooks/use-keyboard";
import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MenuContainer } from "client/module/menu";
import { ModalContainer } from "client/module/modal";
import Editor from "./editor/editor";
import Home from "./home/home";
import Update from "./update/update";
import General from "./general/general";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <>
      <ModalContainer />
      <MenuContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home/*" element={<Home />} />
        <Route path="general/*" element={<General />} />
        <Route path="editor/*" element={<Editor />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </>
  );
}

export default Main;
