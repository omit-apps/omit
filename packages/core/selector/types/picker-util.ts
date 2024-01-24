import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { Background } from "../../elements/backgroud/backgroud";

export interface PickResult {
  point: Konva.Vector2d;
  element: Konva.Shape;
}

/**
 * 根据KonvaEventObject<MouseEvent>创建拾取结果信息
 * @param evt
 * @returns
 */
export function makePickResult(evt: KonvaEventObject<MouseEvent>): PickResult {
  let result: PickResult = {
    point: { x: evt.evt.offsetX, y: evt.evt.offsetY },
    element: null,
  };

  // 对于Stage以及Background类型暂时屏蔽
  if (evt.target instanceof Background || evt.target instanceof Konva.Stage) {
    return result;
  }

  result.element = evt.target;

  return result;
}
