import React from "react";

export default function Update(): React.ReactElement {
  return (
    <div className="bg-dark-300 h-full flex flex-col font-bold space-y-4 items-center text-white/60 py-3">
      <div className="flex flex-col items-center space-y-4">
        <img className="w-96px h-96px" />
        <p className="">Name: AnyDesign</p>
        <p className="">Version: 0.0.1 aplha</p>
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
