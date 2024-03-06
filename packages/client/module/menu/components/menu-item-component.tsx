import React from "react";
import { MenuItem } from "../type/menu-item";

type MenuItemPropType = DefinePropTypes<{
  item: MenuItem;
}>;

export default function MenuItemComponent(
  props: MenuItemPropType
): React.ReactElement {
  return (
    <div
      className="p-3 transition-all-300 flex items-center cursor-pointer hover:bg-[#666]"
      title={props.item.title}
      onClick={props.item.action}
    >
      {props.item.icon ? (
        <img src={props.item.icon} className="w-18px" />
      ) : null}
      <p className={`text-16px ${props.item.icon ? "ml-2" : null}`}>
        {props.item.title}
      </p>
    </div>
  );
}
