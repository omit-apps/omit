import React, { useState } from "react";
import { TextTabPropTypes } from "../type/text-tab";

export function TextTab(props: TextTabPropTypes): React.ReactElement {
  const [activeTabId, setActiveTabId] = useState(props.items?.[0].id ?? "");

  const getActiveTabComponent = () => {
    const component = props.items.find(
      (item) => item.id === activeTabId
    ).component;

    return component;
  };

  return (
    <div>
      <ul className="text-tab-header flex space-x-2 list-none">
        {props.items.map((item) => (
          <li
            className={`hover:text-white cursor-pointer transition-all-300 ${
              item.id === activeTabId ? "text-white" : ""
            }`}
            onClick={() => setActiveTabId(item.id)}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div>{getActiveTabComponent()}</div>
    </div>
  );
}
