import { Canvas } from "@any-disign/core";
import { TabOption } from "@any-disign/component";
import { LayerInfo } from "./components/layer/layer-info";
import { refershLayerInfo } from "./store/reducers/application";
import { Dispatch } from "@reduxjs/toolkit";
import Knova from "konva";

let activeCanvas: Canvas | null;
let activeLayer: Knova.Layer | null;
const fileContainerMap: Map<string, any> = new Map();

export function gatherFileContaienr(id: string, ref: any) {
  if (fileContainerMap.has(id)) return;
  fileContainerMap.set(id, ref);
}

export function activeTabChangeEventProcess(option: TabOption) {
  if (!option) return;
  setTimeout(() => {
    fileContainerMap.get(option.key).activeContainer();
  });
}

export function setActiveCanvas(canvas: Canvas, dispatchEvent: Dispatch) {
  activeCanvas = canvas;
  dispatchEvent(refershLayerInfo(getCanvasLayerInfo()));
}

export function getActiveCanvas() {
  return activeCanvas;
}

export function setActiveLayer(layer: Knova.Layer) {
  activeLayer = layer;
}

export function getActiveLayer() {
  return activeLayer;
}

const getCanvasLayerInfo = () => {
  const activeCanvas = getActiveCanvas();
  if (!activeCanvas) return;
  return activeCanvas.layerList.map<LayerInfo>((layerInfo) => ({
    id: layerInfo.id(),
    name: layerInfo.name(),
  }));
};
