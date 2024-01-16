import React, { useEffect } from "react";
import { TabContainer } from "@any-disign/component";
import { createContainer } from "@any-disign/core";

export default function FileContainer(): React.ReactElement {
  useEffect(() => {
    createContainer(
      document.getElementById("file-container") as HTMLDivElement,
      {
        width: 800,
        height: 600,
      }
    );
  }, []);

  return (
    <TabContainer>
      <div id="file-container" className="w-full h-full"></div>
    </TabContainer>
  );
}
