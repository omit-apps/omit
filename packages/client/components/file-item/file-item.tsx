import { FileType } from "../../info/file-info";
import React from "react";
import { Attribute, Delete, File, OptionFile, Rename } from "@omit/icons";
import { MenuItem, useMenu } from "client/module/menu";

const getItemIcon = (type: FileType) => {
  return (
    <div className="flex justify-center">
      {type === "folder" ? (
        <img
          className="w-24"
          draggable={false}
          src="../../assets/images/folder.png"
        />
      ) : (
        <img className="w-20 h-24" draggable={false} src={File} />
      )}
    </div>
  );
};

interface FileItemPropsType {
  type: FileType;
  name: string;
  triggerType?: "click" | "double";
  action?: () => void;
}

export default function FileItem(props: FileItemPropsType): React.ReactElement {
  const dbClickEventHandlerProcess = () => {
    if (props.triggerType === "double") {
      props.action?.();
    }
  };

  const clickEventHandlerProcess = (
    e: React.MouseEvent<HTMLDivElement, PointerEvent>
  ) => {
    if (["click", undefined].includes(props.triggerType)) {
      props.action?.();
    }
    onClickEventHandler(e);
  };

  const fileItemMenuList: MenuItem[] = [
    {
      id: "open-file",
      title: "打开文件",
      icon: OptionFile,
      action: () => {
        console.log("open file");
      },
    },
    {
      id: "delete-file",
      title: "删除",
      icon: Delete,
      action: () => {
        console.log("delete file");
      },
    },
    {
      id: "rename-file",
      title: "重命名",
      icon: Rename,
      action: () => {
        console.log("rename file");
      },
    },
    {
      id: "file-attribute",
      title: "文件属性",
      icon: Attribute,
      action: () => {
        console.log("rename file");
      },
    },
  ];

  const onClickEventHandler = (
    e: React.MouseEvent<HTMLDivElement, PointerEvent>
  ) => {
    if (e.button === 0 || e.button === 1) return;
    useMenu(e.nativeEvent, fileItemMenuList);
  };

  return (
    <div
      className="py-2 w-25 cursor-pointer flex flex-col items-center justify-center px-4 rounded transition-all-300 inline-block hover:bg-dark-50"
      title={props.name}
      onPointerDown={clickEventHandlerProcess}
      onDoubleClick={dbClickEventHandlerProcess}
    >
      {getItemIcon(props.type)}
      <p className="font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {props.name}
      </p>
    </div>
  );
}
