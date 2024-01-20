import React, { useEffect } from "react";
import { TabContainer } from "@any-disign/component";
import { createContainer } from "@any-disign/core";
import { Canvas } from "@any-disign/core";

export default function FileContainer(): React.ReactElement {
  let canvas: Canvas | null = null;
  useEffect(() => {
    initCanvas();

    return () => {
      // canvas.destroy();
      // canvas = null;
    };
  }, []);

  const initCanvas = () => {
    if (canvas) return;
    canvas = createContainer(
      document.getElementById("file-container") as HTMLDivElement,
      {
        width: 800,
        height: 600,
      }
    );
  };

  return (
    <TabContainer>
      <div id="file-container" className="w-full h-full"></div>
    </TabContainer>
  );
}
