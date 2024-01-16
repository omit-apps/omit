import React from "react";
import UserInfo from "../user/user-info";
import Option from "../../../components/option/option";

export default function Header(): React.ReactElement {
  return (
    <nav className="bg-dark-100 h-32px">
      <div className="py-1 flex items-center">
        <Option text="文件" />
        <Option text="编辑" />
        <Option text="插件" />
        <Option text="关于" />
      </div>
    </nav>
  );
}
