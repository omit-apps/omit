import Konva from "konva";
import { registerKeyboard, removeKeyboard } from "../keyboard";
import { KeyCode, KeyboardBlcok } from "../keyboard/keyboard";
import { v4 } from "uuid";
import { createSelector } from "../selector";
import { createPicker } from "../selector/picker";
import { Background } from "../elements/backgroud/backgroud";
import { PickResult } from "../selector/types/picker-util";
import { changeCursorStyle } from "../utils/document-utils";
import { ActiveTransformer } from "../elements";

const defaultCanvasRefKeys: CanvasRefKeys = {
  openDragger: [KeyCode.Space],
  openZoom: [KeyCode.Ctrl, KeyCode.Mouse0],
};

export class Canvas {
  // basic elements
  container: HTMLDivElement;
  config: CreateCanvasConfig;
  stage: Konva.Stage & { useSelector?: boolean };
  activeLayer: Konva.Layer;
  backgroud: Konva.Rect;

  // data
  /**
   * 图层列表
   */
  layerList: Konva.Layer[] = [];
  /**
   * 元素列表
   */
  elementList: (Konva.Shape | Konva.Group)[] = [];
  /**
   * Move变换控制器
   */
  moveTransformer: Konva.Transformer | null;
  moveTransformerElement: Konva.Shape | null;
  /**
   * Pick变换控制器
   */
  pickTransformer: Konva.Transformer | null;
  pickTransformerElement: Konva.Shape | null;
  transformerLayer: Konva.Layer | null;

  // flag
  isZoom: boolean;
  isDrag: boolean;

  // keyborad refs
  moveKeyRef: KeyboardBlcok;
  zoomKeyRef: KeyboardBlcok;

  constructor(container: HTMLDivElement, config?: CreateCanvasConfig) {
    if (!container) throw new Error("container is null");

    this.container = container;
    this.config = config;
    this.isZoom = false;
    this.isDrag = false;
    this.moveTransformerElement = null;
    // 如果用户没有传入配置表则使用默认的键位配置
    this.config.refKeys = this.config.refKeys ?? defaultCanvasRefKeys;

    this.init();
    this.mountEvent();
    createSelector(this);
    if (this.config.pick) {
      createPicker(
        this.stage,
        (pickResult) => {
          this.pickerDownProcess(pickResult);
          this.config.pickProcess(pickResult);
        },
        (pickResult) => this.pickerMoveProcess(pickResult)
      );
    }
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

    const layer = this.addLayer("默认图层")[1];
    stage.add(layer);

    const backgroud = new Background({
      width: this.config.width ?? cW,
      height: this.config.height ?? cH,
      fill: "#fff",
    });

    layer.add(backgroud);
    layer.scale({ x: 1, y: 1 });
    backgroud.position({
      x: (cW - backgroud.attrs.width) / 2,
      y: (cH - backgroud.attrs.height) / 2,
    });

    if (this.config.enableTrans) {
      this.transformerLayer = new Konva.Layer();
      stage.add(this.transformerLayer);
      this.transformerLayer.setZIndex(1);

      this.moveTransformer = new ActiveTransformer();
      this.pickTransformer = new Konva.Transformer();
      this.transformerLayer.add(this.moveTransformer);
      this.transformerLayer.add(this.pickTransformer);
    }

    this.stage = stage;
    this.activeLayer = layer;
    this.backgroud = backgroud;
  }

  /**
   * 鼠标Down事件的处理
   * @param pickResult
   */
  pickerDownProcess(pickResult: PickResult) {
    if (!this.config.enableTrans) return;
    if (!this.config.enableTrans) return;
    if (pickResult.element === null) {
      if (this.pickTransformerElement === null) return;
      this.pickTransformerElement = null;
      this.pickTransformer.setNodes([]);
    } else {
      if (this.pickTransformerElement === pickResult.element) return;
      this.pickTransformerElement = pickResult.element;
      this.pickTransformer.setNodes([pickResult.element]);
    }
  }

  /**
   * 鼠标Move的处理
   * @param pickResult
   * @returns
   */
  pickerMoveProcess(pickResult: PickResult) {
    if (!this.config.enableTrans) return;
    if (pickResult.element === null) {
      if (this.moveTransformerElement === null) return;
      this.moveTransformerElement = null;
      this.moveTransformer.setNodes([]);
      changeCursorStyle("default");
    } else {
      if (this.moveTransformerElement === pickResult.element) return;
      this.moveTransformerElement = pickResult.element;
      this.moveTransformer.setNodes([pickResult.element]);
      changeCursorStyle("pointer");
    }
  }

  /**
   * 添加图层
   * @param name
   * @returns
   */
  addLayer(name: string): [string, Konva.Layer] {
    const layer = new Konva.Layer({
      name: name,
      id: v4(),
    });

    this.layerList.push(layer);

    return [layer.id(), layer];
  }

  /**
   * 添加元素到画布图层
   * @param element 要添加的元素
   * @param layerId 添加的目标图层
   * @returns
   */
  addElement(element: Konva.Group | Konva.Shape): void;
  addElement(element: Konva.Group | Konva.Shape, layerId?: string): void {
    if (this.activeLayer === null && !layerId) return;
    const targetLayer = layerId
      ? this.findLayerById(layerId)
      : this.activeLayer;

    targetLayer.add(element);
    this.elementList.push(element);
  }

  changeActiveLayer(params: Konva.Layer | string): void {
    if (params instanceof Konva.Layer) {
      this.activeLayer = params;
      return;
    }

    if (typeof params === "string") {
      const layer = this.findLayerById(params);
      if (layer) {
        this.activeLayer = layer;
      }
    }
  }

  findLayerById(layerId: string): Konva.Layer | null {
    let findLayer: Konva.Layer | null = null;

    for (const layer of this.layerList) {
      if (layer.id() === layerId) {
        findLayer = layer;
        break;
      }
    }

    return findLayer;
  }

  /**
   * 变更画布的拖拽状态
   * @param status 拖拽状态
   * @returns
   */
  changeCanvasDraggableStatus(status: boolean) {
    if (this.stage.draggable() === status) return;
    this.stage.draggable(status);
  }

  /**
   * 挂载事件相关的逻辑
   */
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

  /**
   * 拖拽事件
   */
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

  /**
   * 操作快捷键事件
   */
  opreationEvent() {
    this.moveKeyRef = new KeyboardBlcok(
      this.config.refKeys.openDragger,
      () => {
        changeCursorStyle("grab");
        this.isDrag = true;
        this.changeCanvasDraggableStatus(true);
      },
      () => {
        changeCursorStyle("default");
        this.isDrag = false;
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
  /**
   * 画布宽度
   */
  width?: number;
  height?: number;
  /**
   *快捷键映射表
   */
  refKeys?: CanvasRefKeys;
  pick?: boolean;
  // 开启变换控制器
  enableTrans?: boolean;
  pickProcess?: (pickResult: PickResult) => void;
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
