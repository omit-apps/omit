import { TabOption } from "@any-disign/component";
import { Canvas } from "@any-disign/core";
import { LayerInfo } from "../../info/layer-info";
import { dispatch } from "../../store";
import {
  refershLayerInfo,
  switchEditSourceFileByMD5,
} from "./reducer/file-slice";

/**
 * Activeing canvas.
 */
let activeCanvas: Canvas | null;
/**
 * MD5 and file-continer Ref mapping table.
 */
const fileContainerMap: Map<string, any> = new Map();

/**
 * Gathering file-container.
 * @param id MD5 code for file.
 * @param ref The ref of the componet.
 */
export function gatherFileContaienr(id: string, ref: any) {
  if (fileContainerMap.has(id)) return;
  fileContainerMap.set(id, ref);
}
/**
 * Switch the activeing file-container based on the tab-option.
 * @param option
 */
export function activeTabChangeEventProcess(option: TabOption) {
  if (!option) return;
  // Switch the active canvas.
  dispatch(switchEditSourceFileByMD5(option.key));
  // Switch the active container,but do not switch immediately. Give the DOM some time to settle.
  setTimeout(() => {
    fileContainerMap.get(option.key)?.activeContainer();
  });
}
/**
 * Change the activeing canvas.
 * @param canvas
 * @param dispatchEvent
 */
export function setActiveCanvas(canvas: Canvas) {
  // Switch the canvas.
  activeCanvas = canvas;
  if (activeCanvas === null) return;
  // Refresh the layer infomation based on the new canvas.
  dispatch(refershLayerInfo(getCanvasLayerInfo()));
}

/**
 * Get the active canvas.
 * @returns Canvas
 */
export function getActiveCanvas() {
  return activeCanvas;
}

/**
 * Retrieve the layer information in the current canvas.
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
