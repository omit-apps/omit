import FileItem from "client/components/file-item/file-item";
import { useOpenModal } from "client/hooks/use-modal";
import { File } from "client/info/file-info";
import CreateFile from "client/modal/create-file";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileList, getFolderDataById } from "./my-design-data";

import { Button } from "@omit/component";
import { Add } from "@omit/icons";

export default function MyDesign(): React.ReactElement {
  const navigate = useNavigate();
  const [currentOpenPaths, setCurrentOpenPaths] = useState<string[]>([]);
  const [currentFileList, setCurrentFileList] = useState<File[]>([...fileList]);

  const openDesigner = () => {
    electronAPI.window.createWindow({
      title: "设计器",
      width: 1440,
      height: 900,
      url: "editor",
    });
  };

  const fileItemAction = (file: File) => {
    switch (file.type) {
      case "file":
        openDesigner();
        break;
      case "folder":
        setCurrentOpenPaths([...currentOpenPaths, file.name]);
        setCurrentFileList([...getFolderDataById("1")]);
        break;
    }
  };

  const navigateBlock = (content: string) => {
    return (
      <>
        <div
          className="max-w-72px p-1 rounded overflow-hidden text-nowrap text-ellipsis cursor-pointer transition-all-200 hover:bg-[#999]"
          title={content}
        >
          {content}
        </div>
        <p className="px-1">/</p>
      </>
    );
  };

  return (
    <div className="relative flex-1 text-white">
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex space-x-2">
          <Button
            className="px-2 bg-blue hover:bg-red-400"
            icon={Add}
            type="mixin"
            action={() => {
              useOpenModal("创建文件", CreateFile());
            }}
            value="新建文件"
          />
          <Button
            className="px-2 bg-blue hover:bg-red-400"
            icon={Add}
            type="mixin"
            value="新建文件夹"
          />
        </div>
      </div>
      {/* Folder Container */}
      <div className="space-x-4 flex items-start p-4 h-640px overscroll-y-auto">
        {currentFileList.map((file) => (
          <FileItem
            key={file.id}
            type={file.type}
            name={file.name}
            triggerType="double"
            action={() => fileItemAction(file)}
          />
        ))}
      </div>
      <div className="absolute left-3 bottom-3 flex items-center bg-#333 rounded p-3">
        <strong className="p-1">当前位置:</strong>
        <div className="flex items-center ml-2">
          {navigateBlock("根目录")}
          {currentOpenPaths.map((path) => {
            return <>{navigateBlock(path)}</>;
          })}
        </div>
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
