import React, {
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { MenuPropsType } from "../type/menu";

export type MenuRefTypes = {
  setMenuDisplayStatus: (status: boolean) => void;
};

export const Menu = forwardRef(function Menu(
  props: MenuPropsType,
  ref
): React.ReactElement {
  const [display, setDisplay] = useState(false);

  const setMenuDisplayStatus = (status: boolean) => {
    setDisplay(status);
  };

  const clickEventHandler = () => {
    setDisplay(true);
  };

  useImperativeHandle(ref, () => {
    return {
      setMenuDisplayStatus,
    };
  });

  const menuItemContent = () => {
    return (
      <div className="absolute no-drag-area bg-gray-800 shadow-xl rounded overflow-hidden right-[100%] mr-2 top-0 w-[260px] min-h-[32px]">
        <div className="px-2 py-2">{props.header}</div>
        {props.items?.map((item) => {
          if (props.itemRenderer) {
            return props.itemRenderer(item);
          }

          return (
            <div key={item.id}>
              {item.breakLine ? (
                <div className="bg-white/30 mx-4 my-4 h-[.5px]"></div>
              ) : null}
              <div
                className="text-white px-6 py-4 cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  item.action?.();
                  setDisplay(false);
                }}
                title={item.title}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const mousedownEventHandler = (ev: PointerEvent) => {
    const clickInContainer = (ev.target as HTMLElement).closest(
      ".menu-container"
    );
    if (!clickInContainer) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", mousedownEventHandler);
    return () => {
      document.removeEventListener("pointerdown", mousedownEventHandler);
    };
  });

  return (
    <div
      className={`no-drag-area menu-container relative z-10 ${props.className}`}
    >
      {display ? menuItemContent() : null}
      <div onClick={clickEventHandler}>{props.children}</div>
    </div>
  );
});
