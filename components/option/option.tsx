import React from "react";

export default function Option(props: OptionPropsType): React.ReactElement {
  return (
    <div
      className="text-white cursor-pointer h-full leading-[32px] align-middle inline-block px-3 hover:bg-stone-600/30"
      title={props.title ?? props.text}
      onClick={props.action}
    >
      {props.text}
    </div>
  );
}
