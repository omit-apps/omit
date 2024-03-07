import { General, Keyboard, Safely } from "@omit/icons";
import { SideBar } from "client/components/sidebar/type/siderbar-types";

export const generalItems: SideBar[] = [
  { id: "general", title: "通用", icon: General, iconSize: 24 },
  {
    id: "keyboard",
    title: "快捷键",
    icon: Keyboard,
    iconSize: 24,
  },
  {
    id: "safely",
    title: "安全",
    icon: Safely,
    iconSize: 22,
  },
];
