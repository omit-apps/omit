import React from "react";

export default function TabContainer(
  props: TabContainerPropsType
): React.ReactElement {
  return (
    <div className="bg-[#222]/80 w-full h-full shadow-inner shadow-black/50 flex justify-center items-center">
      {props.children}
    </div>
  );
}
