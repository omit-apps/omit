import Konva from "konva";

export class Canvas {
  container: HTMLDivElement;
  config: CreateConfig;
  stage: Konva.Stage;
  layer: Konva.Layer;
  bgRect: Konva.Rect;

  constructor(container: HTMLDivElement, config?: CreateConfig) {
    if (!container) throw new Error("container is null");

    this.container = container;
    this.config = config;
    this.init();
    this.mountEvent();
    this.opreationEvent();
  }

  init() {
    const cW = this.container.clientWidth;
    const cH = this.container.clientHeight;
    // TODO: 创建容器
    const stage = new Konva.Stage({
      container: this.container,
      width: cW,
      height: cH,
      scale: { x: 1, y: 1 },
    });

    const layer = new Konva.Layer({
      draggable: true,
    });
    stage.add(layer);

    const bgRect = new Konva.Rect({
      width: this.config.width ?? cW,
      height: this.config.height ?? cH,
      fill: "#fff",
    });

    layer.add(bgRect);
    layer.scale({ x: 1, y: 1 });
    layer.position({
      x: (cW - bgRect.attrs.width) / 2,
      y: (cH - bgRect.attrs.height) / 2,
    });

    this.stage = stage;
    this.layer = layer;
    this.bgRect = bgRect;
  }

  opreationEvent() {
    // TODO: 操作相关
  }

  mountEvent() {
    this.stage.addEventListener("wheel", (e: WheelEvent) => {
      let scale = 0.05;
      if (e.deltaY < 0) {
        scale = -0.05;
      }

      const oldScale = this.stage.scaleX();
      const pos = this.stage.getPointerPosition();

      const mouseMoveTo = {
        x: (pos.x - this.stage.x()) / oldScale,
        y: (pos.y - this.stage.y()) / oldScale,
      };

      const currentScale = this.stage.attrs.scaleX + scale;

      this.stage.scale({ x: currentScale, y: currentScale });
      this.stage.position({
        x: pos.x - mouseMoveTo.x * currentScale,
        y: pos.y - mouseMoveTo.y * currentScale,
      });
    });
  }
}
