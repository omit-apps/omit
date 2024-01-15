import React from "react";

export default function UserInfo(): React.ReactElement {
  return (
    <div className="flex items-center text-white font-bold">
      {/* <p className="mr-2 text-sm">User Name</p> */}
      <div className="rounded-full w-24px h-24px bg-white overflow-hidden"></div>
    </div>
  );
}
