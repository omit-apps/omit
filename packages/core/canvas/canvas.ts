import Konva from "konva";
import { registerKeyboard, removeKeyboard } from "../keyboard";
import { KeyCode, KeyboardBlcok } from "../keyboard/keyboard";
import Container from "../elements/container/container";

const defaultCanvasRefKeys: CanvasRefKeys = {
  openDragger: [KeyCode.Space],
  openZoom: [KeyCode.Ctrl, KeyCode.Mouse0],
};

export class Canvas {
  container: HTMLDivElement;
  config: CreateCanvasConfig;
  stage: Konva.Stage;
  layer: Konva.Layer;
  bgRect: Konva.Rect;

  isZoom: boolean;

  // 快捷键
  moveKeyRef: KeyboardBlcok;
  zoomKeyRef: KeyboardBlcok;

  constructor(container: HTMLDivElement, config?: CreateCanvasConfig) {
    if (!container) throw new Error("container is null");

    this.container = container;
    this.config = config;
    this.isZoom = false;
    // 如果用户没有传入配置表则使用默认的键位配置
    this.config.refKeys = this.config.refKeys ?? defaultCanvasRefKeys;

    this.init();
    this.mountEvent();
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

  changeCanvasDraggableStatus(status: boolean) {
    if (this.stage.draggable() === status) return;
    this.stage.draggable(status);
  }

  mountEvent() {
    this.stage.addEventListener("wheel", (e: WheelEvent) => {
      if (!this.isZoom) return;
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
    this.draggableEvent();
    this.opreationEvent();
  }

  draggableEvent() {
    this.stage.addEventListener("dragstart", (e) => {
      // console.log(e);
    });

    this.stage.addEventListener("dragmove", (e) => {
      // console.log(e);
    });

    this.stage.addEventListener("dragend", (e) => {
      // console.log(e);
    });
  }

  opreationEvent() {
    this.moveKeyRef = new KeyboardBlcok(
      this.config.refKeys.openDragger,
      () => {
        document.body.style.cursor = "grab";
        this.changeCanvasDraggableStatus(true);
      },
      () => {
        document.body.style.cursor = "default";
        this.changeCanvasDraggableStatus(false);
      }
    );
    this.zoomKeyRef = new KeyboardBlcok(
      this.config.refKeys.openZoom,
      () => {
        this.isZoom = true;
      },
      () => {
        this.isZoom = false;
      }
    );
    registerKeyboard(this.moveKeyRef);
    registerKeyboard(this.zoomKeyRef);
  }

  /**
   * 销毁画布
   */
  destroy() {
    removeKeyboard(this.moveKeyRef);
    this.stage.destroy();
  }
}

/**
 * 创建画布的配置
 */
export interface CreateCanvasConfig {
  width?: number;
  height?: number;
  /**
   *快捷键映射表
   */
  refKeys?: CanvasRefKeys;
}

export interface CanvasRefKeys {
  /**
   * 拖拽快捷键
   */
  openDragger?: KeyCode[];
  /**
   * 开启缩放
   */
  openZoom?: KeyCode[];
}
