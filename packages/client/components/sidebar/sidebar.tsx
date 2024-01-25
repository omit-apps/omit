import React from "react";
import { Button } from "@any-disign/component";
// @ts-ignore
import Cursor from "../../assets/icon/cursor.svg";
// @ts-ignore
import Selector from "../../assets/icon/selector.svg";
// @ts-ignore
import Font from "../../assets/icon/font.svg";
// @ts-ignore
import Container from "../../assets/icon/container.svg";
import { createContainer } from "../../function/create-container";

export default function Sidebar(): React.ReactElement {
  let unsubscription: () => void | null = null;
  const createContainerHandler = () => {
    if (unsubscription) {
      unsubscription();
    } else {
      unsubscription = createContainer("新建容器1");
    }
  };
  return (
    <section className="flex flex-col w-[32px] px-1 bg-dark-100 text-white/80">
      {/* Header */}
      <div className="py-1 mb-2 text-center cursor-grab text-white/30">
        <p className="mb-1">........</p>
      </div>
      <Button className="my-1.5" type="icon" icon={Cursor} value="选择" />
      <Button
        className="my-1.5"
        type="icon"
        iconSize={20}
        icon={Selector}
        value="编辑"
      />
      <Button
        className="my-1.5"
        type="icon"
        iconSize={16}
        icon={Font}
        value="文字"
      />
      <Button
        className="my-1.5"
        type="icon"
        iconSize={22}
        action={createContainerHandler}
        icon={Container}
        value="容器"
      />
    </section>
  );
}
