import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { PanelPropType } from "../type/panel";

export const Panel = forwardRef(function Panel(
  props: PanelPropType,
  ref
): React.ReactElement {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const panelDOM = useRef<HTMLDivElement>(null);

  const changePanelVisible = (visible: boolean, e: MouseEvent) => {
    setVisible(visible);
    const element = e.target as HTMLElement;

    setTimeout(() => {
      setPosition({
        x: element.offsetLeft - panelDOM.current.offsetWidth + 48,
        y: element.offsetTop - panelDOM.current.offsetHeight,
      });
    }, 0);
  };

  useImperativeHandle(ref, () => ({
    changePanelVisible,
    visible,
  }));

  return (
    <div
      ref={panelDOM}
      className="absolute w-320px h-480px"
      style={{
        display: visible ? "block" : "none",
        left: position.x + "px",
        top: position.y + "px",
      }}
    >
      <div className="w-full h-full relative ">
        {/* 面板容器 */}
        <section className="rounded overflow-hidden z-10 bg-dark-200 w-full h-97% mb-6px flex flex-col">
          <header className="flex h-32px text-white/70">
            <div className="px-1 py-2">{props.name}</div>
            <div
              className="ml-auto text-2xl pr-2 cursor-pointer"
              title="关闭"
              onClick={() => setVisible(false)}
            >
              ×
            </div>
          </header>
          <section className="w-full h-full">{props.children}</section>
        </section>
        {/* 小尾巴 */}
        <div className="-z-1 bg-dark-200 absolute rotate-45deg w-16px rounded h-16px right-16px bottom-8px"></div>
      </div>
    </div>
  );
});
