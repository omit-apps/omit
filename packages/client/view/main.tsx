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
import { Canvas } from "@any-disign/core";
import { useDispatch } from "react-redux";
import { changeActiveCanvas } from "../store/reducers/application";

function Main(): ReactElement {
  const dispath = useDispatch();
  /**
   * 切换激活的画布
   * @param canvas 需要切换的画布
   */
  const changeActiveCanvasEventHandler = (canvas: Canvas) => {
    dispath(changeActiveCanvas(canvas));
  };

  const tabList: TabOption[] = [
    {
      title: "新建文件",
      key: "1",
      component: (
        <FileContainer
          changeActiveFileContainer={changeActiveCanvasEventHandler}
        />
      ),
    },
  ];

  const layerInfoList: LayerInfo[] = [
    {
      id: "1",
      name: "图层1",
    },
  ];

  const layerPanel = useRef(null);
  const codePanel = useRef(null);

  useKeyboardRegister();

  const openPanelAction = (e: MouseEvent, panelRef: MutableRefObject<any>) => {
    panelRef.current.changePanelVisible(!panelRef.current.visible, e);
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
        <LayerPanel layerInfos={layerInfoList} />
      </Panel>
      <Panel ref={codePanel} name="代码">
        <CodePanel />
      </Panel>
    </div>
  );
}

export default Main;
