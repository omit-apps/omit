import { TextTab, TextTabItem } from "@omit/component";
import React from "react";
import AvatarFilter from "./avatar-editor/avatar-filter";
import AvatarBadge from "./avatar-editor/avatar-badge";

export default function AvatarEditor(): React.ReactElement {
  const items: TextTabItem[] = [
    {
      id: "filter",
      title: "滤镜",
      component: <AvatarFilter />,
    },
    {
      id: "badge",
      title: "徽章",
      component: <AvatarBadge />,
    },
  ];

  return (
    <div className="w-full h-full flex items-center px-2">
      <div>
        <img src="../../../assets/images/avatar.jpg" width={200} height={200} />
      </div>
      <div className="ml-3 space-y-3 h-200px">
        <TextTab items={items} />
      </div>
    </div>
  );
}
