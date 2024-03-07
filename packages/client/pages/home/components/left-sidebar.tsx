import { Button } from "@omit/component";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBar, homeSidebarList } from "../home-data";

type LeftSiderbarPropTypes = DefinePropTypes<{
  onChange: (tabName: string, id: string) => void;
}>;

export default function LeftSiderbar(
  props: LeftSiderbarPropTypes
): React.ReactElement {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTabId, setActiveTabId] = useState("my-design");

  useEffect(() => {
    const siderbarOption = homeSidebarList.find((option) => {
      return option.id === location.pathname.split("/")[2];
    });
    if (siderbarOption) {
      siderbarAction(siderbarOption);
    }
  }, [location]);

  const siderbarAction = (option: SideBar) => {
    props.onChange?.(option.title, option.id);
    setActiveTabId(option.id);
  };

  return (
    <div className="drag-area flex flex-col items-center bg-dark-300 w-64px h-full">
      <section className="mt-4 space-y-4 flex flex-col items-center text-[16px] text-white">
        {homeSidebarList.map((option) => (
          <Button
            className="p-2 no-drag-area"
            key={option.title}
            type="icon"
            active={activeTabId === option.id}
            action={() => {
              siderbarAction(option);
              navigate(option.id);
            }}
            iconSize={option.iconSize}
            value={option.title}
            icon={option.icon}
          />
        ))}
      </section>
    </div>
  );
}
