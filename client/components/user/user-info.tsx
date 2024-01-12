import React from "react";

export default function UserInfo(): React.ReactElement {
  return (
    <div className="flex items-center">
      <p className="mr-2">User Name</p>
      <div className="rounded-full w-32px h-32px bg-white overflow-hidden"></div>
    </div>
  );
}
