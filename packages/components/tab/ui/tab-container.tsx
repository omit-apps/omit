import React from "react";
import { TabContainerPropsType } from "../type/tab";

export function TabContainer(props: TabContainerPropsType): React.ReactElement {
  return (
    <div className="bg-[#222]/80 w-full h-full shadow-inner shadow-black/50 flex justify-center items-center">
      {props.children}
    </div>
  );
}
