import React, { useEffect, useState } from "react";
import { TabOption, TabPropsType } from "../type/tab";
import TabHeader from "./tab-header";

export function Tab(props: TabPropsType): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>(null);
  const [component, setComponent] = useState<React.ReactElement>(null);

  useEffect(() => {
    if (props.tabList.length) {
      const firstOption = props.tabList[0];
      setActiveTab(firstOption.key);
      props.activeTabChangeEvent(findTabOptionByKey(firstOption.key));
    }
  }, []);

  useEffect(() => {
    if (activeTab === null) return;
    const tabOption = props.tabList.find((option) => option.key === activeTab);
    setComponent(tabOption.component);
    setTimeout(() => {
      props.activeTabChangeEvent(findTabOptionByKey(activeTab));
    });
  }, [activeTab]);

  /**
   * 根据key获取TabOption数据
   * @param key 查找的option的key
   * @returns
   */
  const findTabOptionByKey = (key: string) => {
    let resultOption: TabOption | null = null;

    for (const option of props.tabList) {
      if (option.key === key) {
        resultOption = option;
        break;
      }
    }

    return resultOption;
  };

  const getNotOpenFileComponent = () => {
    if (typeof props.noOption === "string" || !props.noOption) {
      return (
        <div className="h-full flex-1 text-white flex flex-col justify-center items-center bg-[#222]/80">
          {props.noOption ?? "No Option"}
        </div>
      );
    }

    return props.noOption;
  };

  return (
    <>
      {props.tabList.length ? (
        <div className="h-full flex-1 flex flex-col">
          {/* Tab Header */}
          {component}
          <div className="flex h-32px">
            <TabHeader
              activeTab={activeTab}
              tabList={props.tabList}
              changeEventProcessor={setActiveTab}
            />
            <div className="ml-auto bg-dark-100 w-full max-w-[25%]">
              {props.children}
            </div>
          </div>
        </div>
      ) : (
        getNotOpenFileComponent()
      )}
    </>
  );
}

export { TabContainer } from "./tab-container";

