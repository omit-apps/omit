import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { PickResult, makePickResult } from "./types/picker-util";

export type PickerStage = Konva.Stage & {
  _add: (...args: unknown[]) => Konva.Stage;
};

/**
 * 创建拾取器
 * @param stage 目标舞台
 */
export function createPicker(
  stage: Konva.Stage,
  process: (result: PickResult) => void
) {
  stage.on("click", (evt: KonvaEventObject<MouseEvent>) => {
    process(makePickResult(evt));
  });
}
