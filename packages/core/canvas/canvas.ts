import Konva from "konva";
import { registerKeyboard } from "../keyboard";
import { KeyCode, KeyboardBlcok } from "../keyboard/keyboard";

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
    this.draggableEvent();
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

    const layer = new Konva.Layer();
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
    registerKeyboard(
      new KeyboardBlcok(
        [KeyCode.Space],
        () => {
          // document.body.style.cursor = "pointer";
          this.changeCanvasDraggableStatus(true);
        },
        () => {
          this.changeCanvasDraggableStatus(false);
        }
      )
    );
  }

  changeCanvasDraggableStatus(status: boolean) {
    this.stage.draggable(status);
  }

  draggableEvent() {
    this.stage.addEventListener("dragstart", (e) => {
      console.log(e);
    });

    this.stage.addEventListener("dragmove", (e) => {
      console.log(e);
    });

    this.stage.addEventListener("dragend", (e) => {
      console.log(e);
    });
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
