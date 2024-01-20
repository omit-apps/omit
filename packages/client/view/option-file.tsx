import React from "react";
import { Button } from "@any-disign/component";

export default function OptionFile(): React.ReactElement {
  return (
    <div className="h-full flex-1 p-3 box-border justify-center space-y-10px items-center text-white flex flex-col bg-[#222]/80">
      <Button
        className="w-160px rounded-full text-[16px] border-2"
        border={true}
        type="text"
        value="新建项目"
      />
      <Button
        className="w-160px rounded-full text-[16px] border-2"
        border={true}
        type="text"
        value="打开文件"
      />
    </div>
  );
}
