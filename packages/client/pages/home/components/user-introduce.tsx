import React from "react";
import UserAvatar from "./user-avatar";

const introduceInfo: { title: string; content: string }[] = [
  { title: "工号", content: "10001" },
  { title: "部门", content: "UX/UI设计部" },
  { title: "用户ID", content: "Admin" },
  { title: "职能", content: "原型设计师" },
  { title: "手机号", content: "86-1000000000" },
  { title: "邮箱", content: "test@t.com" },
];

export function UserIntroduce(): React.ReactElement {
  return (
    <div className="w-full h-full pt-6 flex flex-col items-center">
      <div className="h-160px relative w-full">
        <img
          className="w-full h-full rounded"
          draggable={false}
          src="../../../assets/images/hello-world.png"
        />
        <div className="bg-white flex justify-center items-center rounded-full w-105px h-105px absolute left-4 bottom-0px translate-y-1/2">
          <UserAvatar className="pt-5px" width={96} />
        </div>
      </div>
      <h3 className="w-full text-right p-3 cursor-pointer" title="User Name">
        User Name
      </h3>
      <div className="w-full mt-10 space-y-4 overflow-x-hidden h-160px overflow-y-auto">
        {introduceInfo.map((info, index) => (
          <div className="px-4 flex" key={index}>
            <p>{info.title}</p>
            <p className="ml-auto w-180px">{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
