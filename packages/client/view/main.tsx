import { Option, Panel, Tab, TabOption } from "@any-disign/component";
import * as React from "react";
import { ReactElement, useRef } from "react";
import { useKeyboardRegister } from "../hooks/use-keyboard";

import FileContainer from "../components/container/file-container";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import LayerPanel from "../components/panel/layer-panel";
import OptionFile from "./option-file";
import { LayerInfo } from "../components/layer/layer-info";

function Main(): ReactElement {
  const tabList: TabOption[] = [
    {
      title: "新建文件",
      key: "1",
      component: <FileContainer />,
    },
  ];

  const layerInfoList: LayerInfo[] = [
    {
      id: "1",
      name: "图层1",
    },
  ];

  const layerPanel = useRef(null);

  useKeyboardRegister();

  const layerOptionAction = (e: MouseEvent) => {
    layerPanel.current.changePanelVisible(!layerPanel.current.visible, e);
  };

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <Tab tabList={tabList} noOption={<OptionFile />}>
          <div className="flex justify-end">
            <Option
              active={layerPanel?.current?.visible ?? false}
              action={layerOptionAction}
              text="图层"
            />
            <Option text="工具" />
            <Option text="</>" title="代码" />
          </div>
        </Tab>
      </div>
      <Panel ref={layerPanel} name="图层面板">
        <LayerPanel layerInfos={layerInfoList} />
      </Panel>
    </div>
  );
}

export default Main;
