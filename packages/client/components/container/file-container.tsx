import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { TabContainer } from "@any-disign/component";
import { useDispatch } from "react-redux";
import { createContainer } from "@any-disign/core";
import { Canvas } from "@any-disign/core";
import { setActiveCanvas } from "../../global";
import { PickResult } from "@any-disign/core/selector/types/picker-util";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FileContainerProps {
  // TODO: Add some attributes.
}

export default forwardRef(function FileContainer(
  props: FileContainerProps,
  ref
): React.ReactElement {
  let canvas: Canvas | null = null;
  const dispatchEvent = useDispatch();

  /**
   * 切换激活的画布
   * @param canvas 需要切换的画布
   */
  const changeActiveCanvasEventHandler = (canvas: Canvas) => {
    setActiveCanvas(canvas, dispatchEvent);
  };

  useEffect(() => {
    initCanvas();

    return () => {
      // canvas.destroy();
      // canvas = null;
    };
  }, []);

  // export out functions.
  useImperativeHandle(ref, () => ({
    activeContainer,
  }));

  /**
   * 激活容器
   * @returns
   */
  const activeContainer = () => {
    if (!canvas) return;
    changeActiveCanvasEventHandler(canvas);
  };

  /**
   * 拾取事件的处理
   * @param pickResult 拾取结果
   */
  const pickProcessEventHandler = (pickResult: PickResult) => {
    console.log("拾取信息为:", pickResult);
  };

  /**
   * 初始化文件容器的Canvas
   * @returns
   */
  const initCanvas = () => {
    if (canvas) return;
    canvas = createContainer(
      document.getElementById("file-container") as HTMLDivElement,
      {
        width: 800,
        height: 600,
        pick: true,
        pickProcess: pickProcessEventHandler,
      }
    );
  };

  return (
    <TabContainer>
      <div id="file-container" className="w-full h-full"></div>
    </TabContainer>
  );
});
