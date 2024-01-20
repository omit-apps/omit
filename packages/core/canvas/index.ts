import { Canvas, CreateCanvasConfig } from "./canvas";

export { type Canvas } from "./canvas";

export function createContainer(
  container: HTMLDivElement,
  config?: CreateCanvasConfig
): Canvas {
  const canvas = new Canvas(container, config);

  return canvas;
}
