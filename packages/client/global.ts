import { Canvas } from "@any-disign/core";

let activeCanvas: Canvas | null;

export function setActiveCanvas(canvas: Canvas) {
  activeCanvas = canvas;
}

export function getActiveCanvas() {
  return activeCanvas;
}
