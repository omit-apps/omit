import * as React from "react";
import { ReactElement } from "react";
import { useKeyboardRegister } from "../hooks/use-keyboard";

import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import FileEditor from "./file-editor";
import { CommandState } from "../components/tip/command-state";

function Main(): ReactElement {
  useKeyboardRegister();

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div className="flex flex-1 w-full h-full relative">
        <CommandState />
        <Sidebar />
        <FileEditor />
      </div>
    </div>
  );
}

export default Main;
