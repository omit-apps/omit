import { Container, EventObject } from "@any-disign/core";
import { getState } from "../store";
import { getActiveCanvas } from "../file/file-manager";

export function createContainer(name: string) {
  const application = getState().application;
  if (application.editFile === null) return null;
  // 准备canvas以及创建的容器
  const canvas = getActiveCanvas();
  // 暂时禁用选区
  canvas.stage.useSelector = false;

  // 开始创建逻辑流程
  const beforCreateContainer = (e: EventObject<MouseEvent>) => {
    if (e.evt.button !== 0) return;
    const container = new Container({ name, width: 0, height: 0 });
    // 将容器添加到当前激活的图层中
    const layer = canvas.findLayerById(application.editFile.activeLayerInfo.id);
    const startPosition = canvas.stage.getRelativePointerPosition();
    container.setPosition(startPosition);
    layer.add(container);

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
