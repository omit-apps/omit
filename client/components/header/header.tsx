import React from "react";
import UserInfo from "../user/user-info";

export default function Header(): React.ReactElement {
  return (
    <nav className="bg-dark-100 py-1 h-42px flex items-center">
      {/* User Info */}
      <div className="ml-auto mr-8px">
        <UserInfo />
      </div>
    </nav>
  );
}
