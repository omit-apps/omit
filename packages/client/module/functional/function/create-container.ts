import { Container, EventObject } from "@any-design/core";
import { FunctionalFunctions } from "../../../info/func-info";
import { functionalPreProcessor } from "../util/functional-utils";

export interface CreateContainerParams {
  name: string;
}

/**
 * 创建容器功能函数
 * @param name
 * @returns
 */
function createContainer(params: CreateContainerParams) {
  let result = functionalPreProcessor();
  if (result === null) return;
  let { canvas, activeLayer } = result;

  // 开始创建逻辑流程
  const beforCreateContainer = (e: EventObject<MouseEvent>) => {
    result = functionalPreProcessor();
    canvas = result.canvas;
    activeLayer = result.activeLayer;

    if (e.evt.button !== 0) return;
    const container = new Container({ name: params.name, width: 0, height: 0 });
    // 将容器添加到当前激活的图层中

    const startPosition = canvas.stage.getRelativePointerPosition();
    container.setPosition(startPosition);
    activeLayer.add(container);

    const onMouseMove = () => {
      const currentPosition = canvas.stage.getRelativePointerPosition();
      container.setSize({
        width: currentPosition.x - startPosition.x,
        height: currentPosition.y - startPosition.y,
      });
    };

    const onMouseUp = () => {
      canvas.stage.off("mousemove", onMouseMove);
      canvas.stage.off("mouseup", onMouseUp);
    };

    canvas.stage.on("mousemove", onMouseMove);
    canvas.stage.on("mouseup", onMouseUp);
  };

  setTimeout(() => {
    canvas.stage.on("mousedown", beforCreateContainer);
  });

  return () => {
    canvas.stage.useSelector = true;
    canvas.stage.off("mousedown", beforCreateContainer);
  };
}
/**
 * 创建功能函数定义
 */
export const createContainerFunction: FunctionalFunctions<
  typeof createContainer
> = {
  title: "创建容器",
  id: "create-container",
  execute: createContainer,
};
