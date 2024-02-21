// @ts-ignore
import BrushIcon from "../../../assets/icon/brush.svg";
// @ts-ignore
import ResourceLibraryIcon from "../../../assets/icon/resource-library.svg";
// @ts-ignore
import MyTeamIcon from "../../../assets/icon/my-team.svg";
// @ts-ignore
import AssetsRepositoryIcon from "../../../assets/icon/assets-repository.svg";
import { MenuItem } from "@any-disign/component";

export interface SideBar {
  title: string;
  id: string;
  icon: any;
  iconSize: number;
}

export const homeSidebarList: SideBar[] = [
  {
    title: "我的设计",
    id: "my-design",
    icon: BrushIcon,
    iconSize: 24,
  },
  {
    title: "我的团队",
    id: "my-team",
    icon: MyTeamIcon,
    iconSize: 26,
  },
  {
    title: "资源市场",
    id: "assets-bazaar",
    icon: AssetsRepositoryIcon,
    iconSize: 32,
  },
  {
    title: "插件市场",
    id: "plugin-bazaar",
    icon: ResourceLibraryIcon,
    iconSize: 28,
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
  },
  {
    id: "update",
    breakLine: true,
    title: "版本更新",
  },
  {
    id: "quit",
    title: "登出",
  },
];
