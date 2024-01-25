import Konva from "konva";
import { Canvas } from "../canvas";
import { EventObject } from "../event";

/**
 * Stage的包装类型
 */
export type StagePackage = Konva.Stage & {
  // 是否使用选择器
  useSelector: boolean;
};

/**
 * 选择器图层
 */
export type SelectorLayer = Konva.Layer & {
  isSelector: boolean;
};

/**
 * 创建选择器
 * @param canvas 选择器使用的舞台
 */
export function createSelector(canvas: Canvas) {
  // 转换为包装类型
  let packageStage = canvas.stage as StagePackage;
  packageStage.useSelector = true;

  const selectorLayer = new Konva.Layer() as SelectorLayer;
  selectorLayer.isSelector = true;
  packageStage.add(selectorLayer);
  selectorLayer.zIndex(1);
  const group = new Konva.Group();
  selectorLayer.add(group);

  const onMouseDown = (mousedownEvent: EventObject<MouseEvent>) => {
    // 除左键、禁用选择器、拖拽的情况下才能生成选区
    if (
      mousedownEvent.evt.button !== 0 ||
      !packageStage.useSelector ||
      canvas.isDrag
    )
      return;
    const startPos: Konva.Vector2d = packageStage.getRelativePointerPosition();

    const selectorRect = new Konva.Rect({
      width: 0,
      height: 0,
      fill: "#76becc",
      opacity: 0.3,
    });
    selectorRect.setPosition(startPos);
    group.add(selectorRect);

    const onMouseMove = () => {
      const currentPos: Konva.Vector2d =
        packageStage.getRelativePointerPosition();
      selectorRect.setSize({
        width: currentPos.x - startPos.x,
        height: currentPos.y - startPos.y,
      });
    };

    const onMouseUp = () => {
      packageStage.off("mouseup", onMouseUp);
      packageStage.off("mousemove", onMouseMove);
      selectorRect.remove();
    };

    packageStage.on("mousemove", onMouseMove);
    packageStage.on("mouseup", onMouseUp);
  };

  packageStage.on("mousedown", onMouseDown);
}
