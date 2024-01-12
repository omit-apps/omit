import React from "react";

export default function ToolButton(props: ToolButtonProps): React.ReactElement {
  return (
    <div
      className="text-center py-4 my-1 transition-all cursor-pointer hover:bg-dark-50"
      title={props.value}
    >
      {props.value}
    </div>
  );
}
