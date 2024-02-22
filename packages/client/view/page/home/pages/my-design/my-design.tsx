import FileItem from "../../../../../components/file-item/file-item";
import React from "react";
import { fileList } from "./my-design-data";
import { Button } from "@any-disign/component";

// @ts-ignore
import AddIcon from "../../../../../assets/icon/add.svg";
import { useOpenModal } from "../../../../../hooks/use-modal";
import CreateFile from "../../../../../modal/create-file";

export default function MyDesign(): React.ReactElement {
  return (
    <div className="relative flex-1 text-white">
      <div className="h-32px flex justify-end space-x-2">
        <Button
          className="px-2 bg-blue hover:bg-red-400"
          icon={AddIcon}
          type="mixin"
          action={() => {
            useOpenModal("创建文件", CreateFile());
          }}
          value="新建文件"
        />
        <Button
          className="px-2 bg-blue hover:bg-red-400"
          icon={AddIcon}
          type="mixin"
          value="新建文件夹"
        />
      </div>
      {/* Folder Container */}
      <div className="space-x-4 flex p-4">
        {fileList.map((file) => (
          <FileItem key={file.id} type={file.type} name={file.name} />
        ))}
      </div>
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
    </div>
  );
}
