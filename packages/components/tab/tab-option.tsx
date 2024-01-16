import React from "react";

export default function TabOption(
  props: TabOptionPropsType
): React.ReactElement {
  return (
    <div
      className="text-white transition-all flex w-auto min-w-48px max-w-120px h-full align-bottom leading-32px inline-block bg-gray-500/20 hover:bg-gray-500/70 px-3"
      title={props.title}
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
