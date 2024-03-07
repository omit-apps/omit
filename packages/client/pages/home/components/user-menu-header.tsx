import { useOpenModal } from "client/module/modal/hooks/use-modal";
import EditStatus from "client/modal/edit-status";
import React from "react";
import UserAvatar from "./user-avatar";
import { Professional } from "@omit/icons";

type UserMenuHeaderPropTypes = DefinePropTypes<{
  action?: () => void;
}>;

export default function UserMenuHeader(
  props: UserMenuHeaderPropTypes
): React.ReactElement {
  const editStatusEventHandler = () => {
    props.action?.();
    useOpenModal("设置状态", <EditStatus />);
  };

  return (
    <div className="no-drag-area">
      <div className="flex">
        <UserAvatar width={52} height={52} edit={true} />
        <div className="w-full flex px-3 items-center">
          <p className="text-[16px]">User Name</p>
          <div
            className="mx-2 bg-[#181819] rounded-full w-[56px] flex justify-center items-center"
            title="专业版"
          >
            <img
              className="w-6 h-6 bottom-0 right-0"
              title="专业版"
              src={Professional}
            />
            <p className="text-sm">Pro</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="inline-flex rounded-full my-2 bg-[#181819]  transition-all-300">
          <p
            className="hover:bg-[#333] min-w-[160px] text-left py-2 leading-[18px] rounded-l-full pl-4 pr-2"
            onClick={editStatusEventHandler}
            title="编辑签名"
          >
            这是我的签名
          </p>
          <div
            className="pl-2 flex py-2 pr-4 hover:bg-[#333] rounded-r-full"
            onClick={editStatusEventHandler}
            title="编辑状态"
          >
            {/* <p>➕</p> */}
            <p>🤣</p>
          </div>
        </div>
      </div>
    </div>
  );
}
