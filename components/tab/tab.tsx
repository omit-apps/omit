import React, { useEffect, useState } from "react";
import TabHeader from "./tab-header";

export default function Tab(props: TabPropsType): React.ReactElement {
  const [activeTab, setActiveTab] = useState(props.tabList[0].key);
  const [component, setComponent] = useState(props.tabList[0].component);

  useEffect(() => {
    // TODO: Change Tab
  }, [activeTab]);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Tab Header */}
      <div className="flex-1">{component}</div>
      <div className="flex">
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
