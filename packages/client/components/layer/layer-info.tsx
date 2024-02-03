import { Button } from "@any-disign/component";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayerInfo } from "../../info/layer-info";
import { RootState } from "../../store";
import {
  changeActiveLayerInfo,
  modifyLayerInfo,
} from "../../module/file/reducer/file-slice";

// @ts-ignore
import Lock from "../../assets/icon/lock.svg";
// @ts-ignore
import UnLock from "../../assets/icon/unlock.svg";
// @ts-ignore
import Hidden from "../../assets/icon/hidden.svg";
// @ts-ignore
import Show from "../../assets/icon/show.svg";

export interface LayerInfoPreviewPropType {
  value: LayerInfo;
}

export default function LayerInfoPreview(
  props: LayerInfoPreviewPropType
): React.ReactElement {
  const dispatch = useDispatch();
  const file = useSelector((state: RootState) => state.file);
  const [editName, setEditName] = useState(false);
  const [info, setInfo] = useState<Partial<LayerInfo>>(props.value);

  const nameInput = useRef<HTMLInputElement>();
  /**
   * 编辑名称
   * @param status
   */
  const editLayerNameAction = (status: boolean) => {
    setEditName(status);
    if (status) {
      setTimeout(() => {
        nameInput.current.focus();
      });
    }
  };

  /**
   * 图层缩略图被点击的时候
   */
  const layerClickAction = () => {
    dispatch(changeActiveLayerInfo(props.value));
  };

  /**
   * 锁定按钮被点击的时候
   */
  const layerLockAction = () => {
    const result = !info.lock;
    setInfo({
      ...info,
      lock: result,
    });
    dispatch(modifyLayerInfo({ lock: result }));
  };

  /**
   * 显隐按钮被点击的时候
   */
  const layerVisibleAction = () => {
    const result = !info.visible;
    setInfo({
      ...info,
      visible: result,
    });
    dispatch(modifyLayerInfo({ visible: result }));
  };

  return (
    <div
      className={`
      flex p-2 cursor-pointer hover:bg-dark-50 items-center text-white
      ${
        file.editFile.activeLayerInfo?.id === props.value.id ? "bg-dark-50" : ""
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
            onChange={(e) => {
              setInfo({ name: e.target.value });
              dispatch(modifyLayerInfo({ name: e.target.value }));
            }}
          />
        ) : (
          info.name
        )}
      </p>
      <div className="flex flex-1 justify-end">
        <Button
          type="icon"
          iconSize={18}
          icon={info.visible ? Show : Hidden}
          value={info.visible ? "隐藏" : "显示"}
          action={layerVisibleAction}
        />
        <Button
          type="icon"
          iconSize={12}
          icon={info.lock ? Lock : UnLock}
          value={info.lock ? "解锁" : "锁定"}
          action={layerLockAction}
        />
      </div>
    </div>
  );
}
