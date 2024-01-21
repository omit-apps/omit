import React, { useState } from "react";
import { Button } from "@any-disign/component";
import LayerInfoPreview, { LayerInfo } from "../../components/layer/layer-info";

// @ts-ignore
import NewLayer from "../../assets/icon/new-layer.svg";
// @ts-ignore
import Delete from "../../assets/icon/delete.svg";
// @ts-ignore
import Group from "../../assets/icon/group.svg";

/**
 * 图层面板配置
 */
export interface LayerPanelPropType {
  layerInfos?: LayerInfo[];
}

export default function LayerPanel(
  props: LayerPanelPropType
): React.ReactElement {
  const [layerInfos, setLayerInfos] = useState(props.layerInfos);
  const addLayerAction = () => {
    setLayerInfos([
      ...layerInfos,
      {
        id: layerInfos.length + 1 + "",
        name: `图层${layerInfos.length + 1}`,
      },
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 px-2 overflow-auto h-0px">
        {layerInfos?.map((layerInfo) => (
          <LayerInfoPreview key={layerInfo.id} value={layerInfo} />
        ))}
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