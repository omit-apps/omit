import { Button } from "@any-disign/component";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLayerInfo } from "../../store/reducers/application";

// @ts-ignore
import Lock from "../../assets/icon/lock.svg";
import { RootState } from "../../store";

/**
 * 图层信息
 */
export interface LayerInfo {
  id: string;
  name: string;
  lock?: boolean;
  children?: LayerInfo[];
}

export interface LayerInfoPreviewPropType {
  value: LayerInfo;
}

export default function LayerInfoPreview(
  props: LayerInfoPreviewPropType
): React.ReactElement {
  const dispatch = useDispatch();
  const application = useSelector((state: RootState) => state.application);
  const [editName, setEditName] = useState(false);
  const [info, setInfo] = useState<Partial<LayerInfo>>(props.value);

  const nameInput = useRef<HTMLInputElement>();

  const editLayerNameAction = (status: boolean) => {
    setEditName(status);
    if (status) {
      setTimeout(() => {
        nameInput.current.focus();
      });
    }
  };

  const layerClickAction = () => {
    dispatch(changeActiveLayerInfo(props.value));
  };

  return (
    <div
      className={`
      flex p-2 cursor-pointer hover:bg-dark-50 items-center text-white
      ${
        application.editFile.activeLayerInfo?.id === props.value.id
          ? "bg-dark-50"
          : ""
      }
      `}
      title={props.value.name}
      onClick={layerClickAction}
    >
      <div className="bg-white w-76px h-46px"></div>
      <p
        className="px-2 w-120px"
        onDoubleClick={() => editLayerNameAction(true)}
      >
        {editName ? (
          <input
            ref={nameInput}
            className="outline-none"
            onBlur={() => editLayerNameAction(false)}
            value={info.name}
            onChange={(e) => setInfo({ name: e.target.value })}
          />
        ) : (
          info.name
        )}
      </p>
      <div className="flex flex-1 justify-end">
        <Button type="icon" iconSize={12} icon={Lock} value="锁定" />
      </div>
    </div>
  );
}
