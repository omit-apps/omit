import { Button } from "@any-disign/component";
import React from "react";
import { createTextFunction } from "../../function";
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

  /**
   * 创建文字按钮点击后的事件处理
   */
  const createTextButtonClickEventHandler = () => {
    executeFunction(createTextFunction, {
      text: "Create Text",
    });
  };

  const createContainerButtonClickEventHandler = () => {
    executeFunction(createContainerFunction, { name: "新建容器" });
  };

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
        action={createTextButtonClickEventHandler}
        value="文字"
      />
      <Button
        className="my-1.5"
        trigger={true}
        type="icon"
        iconSize={22}
        action={createContainerButtonClickEventHandler}
        icon={Container}
        value="容器"
      />
    </section>
  );
}
