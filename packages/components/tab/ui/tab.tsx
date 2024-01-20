import React, { useEffect, useState } from "react";
import TabHeader from "./tab-header";

export function Tab(props: TabPropsType): React.ReactElement {
  if (props.tabList.length === 0) {
    if (typeof props.noOption === "string" || !props.noOption) {
      return (
        <div className="h-full flex-1 text-white flex flex-col justify-center items-center bg-[#222]/80">
          {props.noOption ?? "No Option"}
        </div>
      );
    }

    return props.noOption;
  }

  const [activeTab, setActiveTab] = useState(props.tabList[0].key);
  const [component, setComponent] = useState(props.tabList[0].component);

  useEffect(() => {
    // TODO: Change Tab
  }, [activeTab]);

  return (
    <div className="h-full flex-1 flex flex-col">
      {/* Tab Header */}
      <div className="flex-1">{component}</div>
      <div className="flex h-32px">
        <TabHeader
          tabList={props.tabList}
          changeEventProcessor={setActiveTab}
        />
        <div className="ml-auto bg-dark-100 w-full max-w-[25%]">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { TabContainer } from "./tab-container";
