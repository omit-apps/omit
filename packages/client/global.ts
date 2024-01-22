import { Canvas } from "@any-disign/core";
import { LayerInfo } from "./components/layer/layer-info";
import { refershLayerInfo } from "./store/reducers/application";
import { Dispatch } from "@reduxjs/toolkit";
import Knova from "konva";

let activeCanvas: Canvas | null;
let activeLayer: Knova.Layer | null;

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
