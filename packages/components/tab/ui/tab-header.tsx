import React from "react";
import TabOption from "./tab-option";

export default function TabHeader(
  props: TabHeaderPropsType
): React.ReactElement {
  return (
    <div className="bg-dark-100 h-32px w-full max-w-[75%]">
      {props.tabList.map((tab) => (
        <TabOption title={tab.title} key={tab.key} />
      ))}
    </div>
  );
}
