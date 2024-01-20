import { Option, Tab } from "@any-disign/component";
import * as React from "react";
import { ReactElement } from "react";

import FileContainer from "../components/container/file-container";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { useKeyboardRegister } from "../hooks/use-keyboard";
import OptionFile from "../view/option-file";

function Main(): ReactElement {
  const tabList: TabOption[] = [
    {
      title: "新建文件",
      key: "1",
      component: <FileContainer />,
    },
  ];

  useKeyboardRegister();

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <Tab tabList={tabList} noOption={<OptionFile />}>
          <div className="flex justify-end">
            <Option text="图层" />
            <Option text="工具" />
            <Option text="</>" title="代码" />
          </div>
        </Tab>
        {/* <div className="bg-dark-100 h-full">
          <div className=" w-240px"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Main;