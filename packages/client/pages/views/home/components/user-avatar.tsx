import React from "react";

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
  return (
    <div className={`relative`}>
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
        className="rounded-full"
        src="../../../assets/images/avatar.jpg"
        title="User Name"
      />
    </div>
  );
}
