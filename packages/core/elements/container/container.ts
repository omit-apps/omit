import Konva from "konva";

export interface ContainerConfig {
  name: string;
  width?: number;
  height?: number;
}

/**
 * 容器继承于Konva的舞台类型
 */
export class Container extends Konva.Rect {
  constructor(config?: ContainerConfig) {
    super({
      fill: "#999",
      draggable: true,
      ...config,
    });
  }
}
