import Konva from "konva";

/**
 * Stage的包装类型
 */
export type StagePackage = Konva.Stage & {
  // 是否使用选择器
  useSeletor: boolean;
};

/**
 * 选择器图层
 */
export type SelectorLayer = Konva.Layer & {
  isSelector: boolean;
};

/**
 * 创建选择器
 * @param stage 选择器使用的舞台
 */
export function createSelector(stage: Konva.Stage) {
  // 转换为包装类型
  let packageStage = stage as StagePackage;
  packageStage.useSeletor = true;

  const selectorLayer = new Konva.Layer() as SelectorLayer;
  selectorLayer.zIndex(999);
  selectorLayer.isSelector = true;
  packageStage.add(selectorLayer);
  const group = new Konva.Group();
  selectorLayer.add(group);

  stage.addEventListener("mousedown", (mousedownEvent: MouseEvent) => {
    if (mousedownEvent.button !== 0 || !packageStage.useSeletor) return;

    const startPos: Konva.Vector2d = {
      x: mousedownEvent.offsetX,
      y: mousedownEvent.offsetY,
    };
    const selectorRect = new Konva.Rect({
      width: 0,
      height: 0,
      fill: "#76becc",
      opacity: 0.3,
    });
    selectorRect.setPosition(startPos);
    group.add(selectorRect);

    stage.addEventListener("mousemove", (mousemoveEvent: MouseEvent) => {
      const currentPos: Konva.Vector2d = {
        x: mousemoveEvent.offsetX,
        y: mousemoveEvent.offsetY,
      };
      selectorRect.setSize({
        width: currentPos.x - startPos.x,
        height: currentPos.y - startPos.y,
      });
    });
    stage.addEventListener("mouseup", () => {
      stage.removeEventListener("mouseup");
      stage.removeEventListener("mousemove");
      selectorRect.remove();
    });
  });
}
