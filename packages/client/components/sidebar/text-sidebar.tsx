import React from "react";
import { SideBar } from "./type/siderbar-types";

type TextSideBarPropType = DefinePropTypes<{
  items: SideBar[];
  width: number;
  active?: string;
  onChange?: (id: string) => void;
}>;

export default function TextSideBar(
  props: TextSideBarPropType
): React.ReactElement {
  return (
    <div
      className="h-full bg-dark-100 text-white py-4 px-4 space-y-3"
      style={{ width: props.width + "px" }}
    >
      {props.items.map((item) => (
        <div
          className={`flex items-center px-3 py-2 rounded cursor-pointer transition-all-300 hover:bg-[#666] ${
            props.active === item.id ? "bg-#666" : null
          }`}
          key={item.id}
          title={item.title}
          onClick={() => {
            props.onChange?.(item.id);
          }}
        >
          <img src={item.icon} style={{ width: item.iconSize }} />
          <p className="ml-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
