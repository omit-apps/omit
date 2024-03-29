import React, { useState } from "react";
import { ButtonProps } from "../type/button";
import "./style/button.scss";

export function Button(props: ButtonProps): React.ReactElement {
  const [active, setActive] = useState(false);

  const clickEventHanlder = () => {
    if (props.trigger) {
      setActive(!active);
    }
    props.action?.();
  };

  return (
    <div
      className={`
        text-center flex rounded min-w-32px h-32px justify-center items-center transition-all cursor-pointer hover:bg-white/20
        button-border 
        ${
          (active && props.trigger) || (!props.trigger && props.active)
            ? "bg-white/20"
            : ""
        }
        ${props.border ? "b-solid b-white b-1" : ""}
        ${props.className}
        `}
      title={props.value}
      onClick={clickEventHanlder}
    >
      {["icon", "mixin"].includes(props.type) ? (
        <img
          style={{
            width: (props.iconSize ?? 24) + "px",
            height: (props.iconSize ?? 24) + "px",
          }}
          src={props.icon}
        />
      ) : null}
      {["text", "mixin"].includes(props.type) ? props.value : null}
    </div>
  );
}
