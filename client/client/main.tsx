import * as React from "react";
import { ReactElement } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import Tab from "../../components/tab/tab";
import TabContainer from "../../components/tab/tab-container";
import Option from "../../components/option/option";

function Main(): ReactElement {
  const tabList: TabOption[] = [
    { title: "新建文件", key: "1", component: <TabContainer /> },
  ];
  return (
    <div className="flex flex-col h-full">
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
      </div>
    </div>
  );
}

export default Main;
