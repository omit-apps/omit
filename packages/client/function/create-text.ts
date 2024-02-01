import { EventObject, Text } from "@any-disign/core";
import { FunctionalFunctions } from "../info/func-info";
import { functionalPreProcessor } from "../utils/functional-utls";

/**
 * 创建文字所需的参数
 */
export interface CreateTextParams {
  text: string;
}

/**
 * 创建文字功能性函数
 * @returns
 */
function createText(params: CreateTextParams) {
  const result = functionalPreProcessor();
  if (result === null) return;
  const { activeLayer, canvas } = result;

  const onMousedownEventHandler = (event: EventObject<MouseEvent>) => {
    const pos = canvas.stage.getRelativePointerPosition();
    const text = new Text({
      text: params.text,
      x: pos.x,
      y: pos.y,
    });
    activeLayer.add(text);
  };

  canvas.stage.on("mousedown", onMousedownEventHandler);

  return () => {
    canvas.stage.off("mousedown", onMousedownEventHandler);
  };
}

export const createTextFunction: FunctionalFunctions<typeof createText> = {
  title: "创建文字",
  id: "createText",
  execute: createText,
};
