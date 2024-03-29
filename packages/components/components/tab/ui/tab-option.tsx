import React from "react";
import { TabOptionPropsType } from "../type/tab";

export default function TabOption(
  props: TabOptionPropsType
): React.ReactElement {
  return (
    <div
      className={`
      text-white transition-all flex w-auto min-w-48px max-w-120px h-full align-bottom leading-32px inline-block px-3
      hover:bg-gray-500/70
      ${props.active ? "bg-gray-500/70" : "cursor-pointer"} 
      `}
      title={props.title}
      onClick={() => props.action(props.id)}
    >
      <p>{props.title}</p>
      <p
        className="ml-auto font-bold text-2xl cursor-pointer hover:text-white/80"
        title="Close"
      >
        ×
      </p>
    </div>
  );
}
