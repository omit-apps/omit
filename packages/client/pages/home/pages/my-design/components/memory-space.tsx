import React from "react";

export default function MemorySpace(): React.ReactElement {
  return (
    <div className="absolute bottom-4 right-4 w-60 bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <span className="text-sm">剩余空间</span>
      <div className="bg-[#333] mt-2 rounded overflow-hidden">
        <div className="w-[60%] h-6 bg-gradient-to-r from-[#6EE7B7] to-[#3BC8E7] rounded" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-300 flex">
          <div className="bg-gradient-to-r from-[#6EE7B7] to-[#3BC8E7] w-4 h-4 rounded mr-2"></div>
          已用: 60%
        </span>
        <span className="text-xs text-gray-300 flex">
          <div className="bg-[#333] w-4 h-4 rounded mr-2"></div>
          空闲: 40%
        </span>
      </div>
    </div>
  );
}
