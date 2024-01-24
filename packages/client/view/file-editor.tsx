import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFileParser } from "../file/hook/use-file-parser";
import { activeTabChangeEventProcess, gatherFileContaienr } from "../global";
import { RootState } from "../store";
import { clearOpenFile } from "../store/reducers/application";

// components
import { Option, Panel, Tab, TabOption } from "@any-disign/component";
import FileContainer from "../components/container/file-container";
import { CodePanel } from "../components/panel/code-panel";
import LayerPanel from "../components/panel/layer-panel";
import OptionFile from "./option-file";

export default function FileEditor(): React.ReactElement {
  const dispatch = useDispatch();
  const application = useSelector((state: RootState) => state.application);
  const layerPanel = useRef(null);
  const codePanel = useRef(null);
  const [openOptionList, setOpenOptionList] = useState<TabOption[]>([]);

  useEffect(() => {
    useFileParser("", dispatch);
    return () => {
      dispatch(clearOpenFile());
      setOpenOptionList([]);
    };
  }, []);

  useEffect(() => {
    updateOptionList();
  }, [application.openFileList]);

  const openPanelAction = (e: MouseEvent, panelRef: MutableRefObject<any>) => {
    panelRef.current.changePanelVisible(!panelRef.current.visible, e);
  };

  /**
   * 更新Option列表
   */
  const updateOptionList = () => {
    const openOptionIds = openOptionList.map((option) => option.key);
    const newOpenFiles: TabOption[] = application.openFileList
      .filter((file) => !openOptionIds.includes(file.md5))
      .map((file) => {
        return {
          title: file.name + "." + file.ext,
          key: file.md5,
          component: (
            <FileContainer ref={(o: any) => gatherFileContaienr(file.md5, o)} />
          ),
        };
      });

    setOpenOptionList(openOptionList.concat(newOpenFiles));
  };

  return (
    <>
      {openOptionList.length ? (
        <>
          <Tab
            tabList={openOptionList}
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
          <Panel ref={layerPanel} name="图层面板">
            <LayerPanel />
          </Panel>
          <Panel ref={codePanel} name="代码">
            <CodePanel />
          </Panel>
        </>
      ) : (
        <div>文件编辑器正在初始化</div>
      )}
    </>
  );
}
