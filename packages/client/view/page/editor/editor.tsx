import React from "react";
import Header from "client/components/header/header";
import Sidebar from "client/components/sidebar/sidebar";
import { CommandState } from "client/components/tip/command-state";
import FileEditor from "./file-editor";

export default function Editor(): React.ReactElement {
  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div id="page-editor" className="w-full h-full flex flex-1 relative">
        <CommandState />
        <Sidebar />
        <FileEditor />
      </div>
    </div>
  );
}
