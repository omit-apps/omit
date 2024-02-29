import { Button } from "@omit/component";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveCanvas } from "../../module/file";
import { makeLayerInfo } from "../../info/layer-info";
import { RootState } from "../../store";
import {
  addLayerInfo,
  removeLayerInfo,
} from "../../module/file/reducer/file-slice";

// components
import LayerInfoPreview from "../../components/layer/layer-info";

// icons
import { NewLayer, Delete, Group } from "@omit/icons";
/**
 * 图层面板配置
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LayerPanelPropType {
  // TODO: Add some attributes.
}

export default function LayerPanel(
  props: LayerPanelPropType
): React.ReactElement {
  const dispatchEvent = useDispatch();

  const file = useSelector((state: RootState) => state.file);

  /**
   * 添加图层
   */
  const addLayerAction = () => {
    const layerName = `图层${file.editFile.layerInfos.length + 1}`;
    const layer = getActiveCanvas().addLayer(layerName)[1];

    dispatchEvent(addLayerInfo(makeLayerInfo(layer)));
  };

  /**
   * 删除图层
   */
  const removeLayerAction = () => {
    if (file.editFile.layerInfos.length === 1) {
      console.warn("至少保留一个图层");
      return;
    }

    const activeLayerInfo = file.editFile.activeLayerInfo;

    if (activeLayerInfo.lock) {
      console.warn("该图层已经锁定");
      return;
    }

    getActiveCanvas().removeLayer(file.editFile.activeLayerInfo.id);
    dispatchEvent(removeLayerInfo(file.editFile.activeLayerInfo.id));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 px-2 space-y-2 overflow-auto h-0px">
        {file.editFile.layerInfos.map((layerInfo) => {
          return <LayerInfoPreview key={layerInfo.id} value={layerInfo} />;
        })}
      </div>
      <div className="h-32px flex justify-end items-center text-white/70 px-1">
        <Button
          className="w-26px h26px"
          type="icon"
          value="新建图层"
          action={addLayerAction}
          icon={NewLayer}
          iconSize={16}
        />
        <Button
          className="w-26px h26px"
          type="icon"
          value="删除图层"
          icon={Delete}
          action={removeLayerAction}
          iconSize={16}
        />
        <Button
          className="w-26px h26px"
          type="icon"
          value="建立组合"
          icon={Group}
          iconSize={16}
        />
      </div>
    </div>
  );
}
