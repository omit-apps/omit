import { FileType } from "../../info/file-info";
import React from "react";
import { File } from "@any-design/icons";

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
}

export default function FileItem(props: FileItemPropsType): React.ReactElement {
  return (
    <div
      className="py-2 w-25 cursor-pointer flex flex-col items-center justify-center px-4 rounded transition-all-300 inline-block hover:bg-dark-50"
      title={props.name}
    >
      {getItemIcon(props.type)}
      <p className="font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {props.name}
      </p>
    </div>
  );
}
