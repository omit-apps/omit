import { getActiveCanvas } from "../../file/file-manager";
import { getState } from "../../../store";

/**
 * 执行功能性函数的前置处理
 * @returns
 */
export function functionalPreProcessor() {
  const file = getState().file;
  if (file.editFile === null) return null;
  // 准备canvas以及创建的容器
  const canvas = getActiveCanvas();
  // 暂时禁用选区
  canvas.stage.useSelector = false;
  const activeLayer = canvas.findLayerById(
    file.editFile.activeLayerInfo.id
  );

  return {
    file,
    canvas,
    activeLayer,
  };
}
