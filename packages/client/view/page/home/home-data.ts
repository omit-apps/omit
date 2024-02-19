// @ts-ignore
import BrushIcon from "../../../assets/icon/brush.svg";
// @ts-ignore
import ResourceLibraryIcon from "../../../assets/icon/resource-library.svg";
// @ts-ignore
import MyTeamIcon from "../../../assets/icon/my-team.svg";
// @ts-ignore
import AssetsRepositoryIcon from "../../../assets/icon/assets-repository.svg";

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
