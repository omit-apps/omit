import { Button } from "@any-disign/component";
import React from "react";
import { FunctionalType, createTextFunction } from "../../function";
import { createContainerFunction } from "../../function/create-container";
import useCommand from "../../hooks/use-command";

// @ts-ignore
import Cursor from "../../assets/icon/cursor.svg";
// @ts-ignore
import Selector from "../../assets/icon/selector.svg";
// @ts-ignore
import Font from "../../assets/icon/font.svg";
// @ts-ignore
import Container from "../../assets/icon/container.svg";

export default function Sidebar(): React.ReactElement {
  const { executeFunction } = useCommand();

  function functionButtonClickEventHandler<T extends FunctionalType>(
    fun: FunctionalType,
    params: Parameters<T["execute"]>[0]
  ) {
    let unsubscription: () => void | null = null;

    return () => {
      if (unsubscription) {
        unsubscription();
        unsubscription = null;
      } else {
        unsubscription = executeFunction(fun, params);
      }
    };
  }
  return (
    <section className="flex flex-col w-[32px] px-1 bg-dark-100 text-white/80">
      {/* Header */}
      <div className="py-1 mb-2 text-center cursor-grab text-white/30">
        <p className="mb-1">........</p>
      </div>
      <Button
        className="my-1.5"
        trigger={true}
        type="icon"
        icon={Cursor}
        value="选择"
      />
      <Button
        className="my-1.5"
        trigger={true}
        type="icon"
        iconSize={20}
        icon={Selector}
        value="编辑"
      />
      <Button
        className="my-1.5"
        trigger={true}
        type="icon"
        iconSize={16}
        icon={Font}
        action={() => {
          functionButtonClickEventHandler(createTextFunction, {
            text: "Create Text",
          })();
        }}
        value="文字"
      />
      <Button
        className="my-1.5"
        trigger={true}
        type="icon"
        iconSize={22}
        action={() => {
          functionButtonClickEventHandler(createContainerFunction, {
            name: "Container",
          })();
        }}
        icon={Container}
        value="容器"
      />
    </section>
  );
}
