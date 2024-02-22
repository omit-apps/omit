import React from "react";

export default function CreateFile(): React.ReactElement {
  return (
    <input
      className="w-full px-2 bg-[#333] text-white text-xl border-none outline-none h-32px rounded"
      placeholder="请输入文件名称"
    />
  );
}
