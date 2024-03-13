import { useOpenModal } from "client/module/modal";
import React from "react";
import AvatarEditor from "./avatar-editor";

type UserAvatarPropTypes = DefinePropTypes<{
  width?: number;
  height?: number;
  edit?: boolean;
}>;

export default function UserAvatar(
  props: UserAvatarPropTypes = {
    width: 32,
    height: 32,
    edit: false,
  }
): React.ReactElement {
  const editAvatarEventHandler = () => {
    if (!props.edit) return;
    useOpenModal("编辑头像", <AvatarEditor />, { width: 540, height: 320 });
  };

  return (
    <div
      className={`relative ${props.className}`}
      onClick={editAvatarEventHandler}
    >
      {props.edit ? (
        <div
          className="absolute w-full h-full opacity-0 bg-[#333]/40 hover:opacity-100 transition-all-300 rounded-full flex justify-center items-center"
          title="编辑头像"
          style={{ width: props.width + "px", height: props.height + "px" }}
        >
          ➕
        </div>
      ) : null}
      <img
        width={props.width + "px"}
        height={props.height + "px"}
        draggable={false}
        className="rounded-full"
        src="../../../assets/images/avatar.jpg"
        title="User Name"
      />
    </div>
  );
}
