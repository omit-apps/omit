import {
  AssetsRepository,
  Brush,
  Message,
  MyTeam,
  ResourceLib,
  Workbench,
} from "@omit/icons";

import { MenuItem } from "@omit/component";
import { SideBar } from "client/components/sidebar/type/siderbar-types";

export const homeSidebarList: SideBar[] = [
  {
    title: "我的设计",
    id: "my-design",
    icon: Brush,
    iconSize: 24,
  },
  {
    title: "我的团队",
    id: "my-team",
    icon: MyTeam,
    iconSize: 26,
  },
  {
    title: "消息",
    id: "my-message",
    icon: Message,
    iconSize: 36,
  },
  {
    title: "资源市场",
    id: "assets-bazaar",
    icon: AssetsRepository,
    iconSize: 32,
  },
  {
    title: "插件市场",
    id: "plugin-bazaar",
    icon: ResourceLib,
    iconSize: 28,
  },
  {
    title: "我的工作台",
    id: "my-workbench",
    icon: Workbench,
    iconSize: 30,
  },
];

export const homeSettingItem: MenuItem[] = [
  {
    id: "user-profile",
    title: "用户简介",
  },
  {
    id: "my-organization",
    title: "我的组织",
  },
  {
    id: "general-setting",
    title: "通用设置",
    action: () => {
      electronAPI.window.openModal({
        title: "通用设置",
        resizable: false,
        url: "general",
        width: 800,
        height: 520,
      });
    },
  },
  {
    id: "update",
    breakLine: true,
    title: "版本更新",
    action: () => {
      electronAPI.window.openModal({
        title: "版本信息",
        resizable: false,
        url: "update",
      });
    },
  },
  {
    id: "logout",
    title: "登出",
  },
  {
    id: "exit",
    title: "退出",
  },
];
