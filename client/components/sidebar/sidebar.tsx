import React from "react";
import ToolButton from "../tool/tool-button";

export default function Sidebar(): React.ReactElement {
  return (
    <section className="flex flex-col flex-1 w-[48px] px-1 bg-dark-100 text-white/80">
      {/* Header */}
      <div className="py-1 mb-2 text-center cursor-grab text-white/30">
        <p className="mb-1">........</p>
      </div>
      <ToolButton value="选择"></ToolButton>
      <ToolButton value="选择"></ToolButton>
      <ToolButton value="选择"></ToolButton>
      <ToolButton value="选择"></ToolButton>
      <ToolButton value="选择"></ToolButton>
    </section>
  );
}
