import { Canvas } from "./canvas";

export function createContainer(
  container: HTMLDivElement,
  config?: CreateConfig
): Canvas {
  const canvas = new Canvas(container, config);

  return canvas;
}
