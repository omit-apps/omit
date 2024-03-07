import React from "react";

export default function Update(): React.ReactElement {
  return (
    <div className="bg-dark-300 h-full flex flex-col font-bold space-y-4 items-center text-white/60 py-3">
      <div className="flex flex-col mt-16 text-left mb-4 items-center space-y-4">
        <img className="w-96px h-96px mb-4" src="../../../assets/icon.png" />
        <p className="">软件名称: AnyDesign</p>
        <p className="">当前版本: 0.0.1 alpha</p>
        <p className="">更新时间: 2024-02-27</p>
      </div>
      <button
        className="rounded bg-[#666] mt-[100px] hover:bg-[#555] transition-all-300 outline-none cursor-pointer border-none text-white px-3 py-1"
        title="检查更新"
      >
        检查更新
      </button>
    </div>
  );
}
