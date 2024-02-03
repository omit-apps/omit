import { TabOption } from "@any-disign/component";
import { Canvas } from "@any-disign/core";
import { Dispatch } from "@reduxjs/toolkit";
import { LayerInfo } from "../../info/layer-info";
import { refershLayerInfo } from "./reducer/file-slice";

/**
 * 激活的canvas对象
 */
let activeCanvas: Canvas | null;
/**
 * md5与FileContainer Ref的映射表
 */
const fileContainerMap: Map<string, any> = new Map();

/**
 * 收集FileContainer
 * @param id 文件的md5值
 * @param ref Component的Ref
 */
export function gatherFileContaienr(id: string, ref: any) {
  if (fileContainerMap.has(id)) return;
  fileContainerMap.set(id, ref);
}
/**
 * 根据TabOption切换激活的FileContainer
 * @param option
 */
export function activeTabChangeEventProcess(option: TabOption) {
  if (!option) return;
  setTimeout(() => {
    fileContainerMap.get(option.key).activeContainer();
  });
}
/**
 * 改变激活的Cavnas对象
 * @param canvas
 * @param dispatchEvent
 */
export function setActiveCanvas(canvas: Canvas, dispatchEvent: Dispatch) {
  activeCanvas = canvas;
  dispatchEvent(refershLayerInfo(getCanvasLayerInfo()));
}

/**
 * 获取激活的Canvas
 * @returns Canvas
 */
export function getActiveCanvas() {
  return activeCanvas;
}

/**
 * 获取Canva中的图层信息
 * @returns
 */
const getCanvasLayerInfo = () => {
  const activeCanvas = getActiveCanvas();
  if (!activeCanvas) return;
  return activeCanvas.layerList.map<LayerInfo>((layerInfo) => ({
    id: layerInfo.id(),
    name: layerInfo.name(),
    lock: true,
    visible: true,
  }));
};
