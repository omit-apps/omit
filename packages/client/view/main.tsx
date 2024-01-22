import { Option, Panel, Tab, TabOption } from "@any-disign/component";
import * as React from "react";
import { MutableRefObject, ReactElement, useRef } from "react";
import { useKeyboardRegister } from "../hooks/use-keyboard";

import FileContainer from "../components/container/file-container";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import LayerPanel from "../components/panel/layer-panel";
import OptionFile from "./option-file";
import { LayerInfo } from "../components/layer/layer-info";
import { CodePanel } from "../components/panel/code-panel";

function Main(): ReactElement {
  const fileContainerMap: Map<string, any> = new Map();

  const openFileList: TabOption[] = [
    {
      title: "新建文件",
      key: "1",
      component: (
        <FileContainer ref={(o: any) => gatherFileContaienr("1", o)} />
      ),
    },
  ];

  const layerPanel = useRef(null);
  const codePanel = useRef(null);

  useKeyboardRegister();

  const gatherFileContaienr = (id: string, ref: any) => {
    if (fileContainerMap.has(id)) return;
    fileContainerMap.set(id, ref);
  };

  const openPanelAction = (e: MouseEvent, panelRef: MutableRefObject<any>) => {
    panelRef.current.changePanelVisible(!panelRef.current.visible, e);
  };

  const activeTabChangeEventProcess = (option: TabOption) => {
    if (!option) return;
    setTimeout(() => {
      fileContainerMap.get(option.key).activeContainer();
    });
  };

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <div className="flex flex-1 w-full h-full">
        <Sidebar />
        <Tab
          tabList={openFileList}
          noOption={<OptionFile />}
          activeTabChangeEvent={activeTabChangeEventProcess}
        >
          <div className="flex justify-end">
            <Option
              active={layerPanel?.current?.visible ?? false}
              action={(e: MouseEvent) => openPanelAction(e, layerPanel)}
              text="图层"
            />
            <Option text="工具" />
            <Option
              text="</>"
              title="代码"
              action={(e: MouseEvent) => openPanelAction(e, codePanel)}
            />
          </div>
        </Tab>
      </div>
      <Panel ref={layerPanel} name="图层面板">
        <LayerPanel />
      </Panel>
      <Panel ref={codePanel} name="代码">
        <CodePanel />
      </Panel>
    </div>
  );
}

export default Main;
