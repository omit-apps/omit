import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { PickResult, makePickResult } from "./types/picker-util";

export type PickerProcess = (result: PickResult) => void;

/**
 * 创建拾取器
 * @param stage 目标舞台
 */
export function createPicker(
  stage: Konva.Stage,
  clickProcess: PickerProcess,
  moveProcess: PickerProcess
) {
  stage.on("click", (evt: KonvaEventObject<MouseEvent>) => {
    clickProcess(makePickResult(evt));
  });
  stage.on("mousemove", (evt: KonvaEventObject<MouseEvent>) => {
    moveProcess(makePickResult(evt));
  });
}
