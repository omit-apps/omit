import React from "react";
import TabOption from "./tab-option";
import { TabHeaderPropsType } from "../type/tab";

export default function TabHeader(
  props: TabHeaderPropsType
): React.ReactElement {
  return (
    <div className="bg-dark-100 h-32px w-full flex max-w-[75%]">
      {props.tabList.map((tab) => (
        <TabOption
          title={tab.title}
          id={tab.key}
          key={tab.key}
          action={(id) => props.changeEventProcessor(id)}
        />
      ))}
    </div>
  );
}
