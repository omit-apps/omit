import { Button } from "@any-disign/component";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveCanvas } from "../../global";
import { RootState } from "../../store";
import { addLayerInfo } from "../../store/reducers/application";

// components
import LayerInfoPreview from "../../components/layer/layer-info";

// icons
// @ts-ignore
import NewLayer from "../../assets/icon/new-layer.svg";
// @ts-ignore
import Delete from "../../assets/icon/delete.svg";
// @ts-ignore
import Group from "../../assets/icon/group.svg";

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

  const application = useSelector((state: RootState) => state.application);

  const addLayerAction = () => {
    const layerName = `图层${application.editFile.layerInfos.length + 1}`;
    const layerId = getActiveCanvas().addLayer(layerName)[0];

    dispatchEvent(
      addLayerInfo({
        id: layerId,
        name: layerName,
      })
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 px-2 space-y-2 overflow-auto h-0px">
        {application.editFile?.layerInfos?.map((layerInfo) => (
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
