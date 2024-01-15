import * as React from "react";
import { ReactElement } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import Tab from "../../components/tab/tab";
import Option from "../../components/option/option";
import FileContainer from "../components/container/file-container";

function Main(): ReactElement {
  const tabList: TabOption[] = [
    {
      title: "新建文件",
      key: "1",
      component: <FileContainer />,
    },
  ];

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <Tab tabList={tabList}>
          <div className="flex justify-end">
            <Option text="图层" />
            <Option text="工具" />
            <Option text="</>" title="代码" />
          </div>
        </Tab>
        <div className="bg-dark-100 h-full">
          <div className=" w-240px"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
