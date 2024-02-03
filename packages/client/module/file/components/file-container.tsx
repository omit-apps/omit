import { TabContainer } from "@any-disign/component";
import { Canvas, createContainer } from "@any-disign/core";
import { PickResult } from "@any-disign/core/selector/types/picker-util";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { makeLayerInfo } from "../../../info/layer-info";
import { setActiveCanvas } from "../file-manager";
import { setActiveLayerBySourceFileMD5 } from "../reducer/file-slice";
import { SourceFile } from "../type/file";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FileContainerProps {
  source: SourceFile;
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
    setActiveCanvas(canvas);
  };

  useEffect(() => {
    return () => {
      canvas?.destroy();
      canvas = null;
      setActiveCanvas(null);
    };
  }, []);

  // export out functions.
  useImperativeHandle(ref, () => ({
    activeContainer,
  }));

  /**
   * Active the current container.
   * @returns
   */
  const activeContainer = () => {
    if (!canvas) {
      initCanvas();
    } else {
      canvas.redraw(
        document.getElementById(
          `file-container-${props.source.md5}`
        ) as HTMLDivElement
      );
    }

    changeActiveCanvasEventHandler(canvas);
  };

  /**
   * 拾取事件的处理
   * @param pickResult 拾取结果
   */
  const pickProcessEventHandler = (pickResult: PickResult) => {
    console.log("Pick info of the:", pickResult);
  };

  /**
   * 初始化文件容器的Canvas
   * @returns
   */
  const initCanvas = () => {
    if (canvas) return;
    canvas = createContainer(
      document.getElementById(
        `file-container-${props.source.md5}`
      ) as HTMLDivElement,
      {
        width: 800,
        height: 600,
        pick: true,
        enableTrans: true,
        pickProcess: pickProcessEventHandler,
        fill: props.source.md5 === "1" ? "white" : "black",
      }
    );
    // 设置默认图层为source file 的激活图层
    dispatchEvent(
      setActiveLayerBySourceFileMD5({
        id: props.source.md5,
        layerInfo: makeLayerInfo(canvas.activeLayer),
      })
    );
  };

  return (
    <TabContainer>
      <div
        id={`file-container-${props.source.md5}`}
        className="w-full h-full"
      ></div>
    </TabContainer>
  );
});
