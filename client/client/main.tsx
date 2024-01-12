import * as React from "react";
import { ReactElement } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

function Main(): ReactElement {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Sidebar />
    </div>
  );
}

export default Main;
