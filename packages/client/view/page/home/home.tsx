import { Button, Loading } from "@any-disign/component";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { SideBar, homeSettingItem, homeSidebarList } from "./home-data";

// children pages
import MyDesign from "./pages/my-design/my-design";
import MyTeam from "./pages/my-team/my-team";
import AssetsBazaar from "./pages/assets-bazaar/assets-bazaar";
import PluginBazaar from "./pages/plugin-bazaar/plugin-bazaar";

// icons
// @ts-ignore
import SearchIcon from "../../../assets/icon/search.svg";
// @ts-ignore
import ProfessionalIcon from "../../../assets/icon/professional.svg";

// components
import { Menu } from "@any-disign/component";

export default function Home(): React.ReactElement {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [activeTabId, setActiveTabId] = useState("my-design");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  const searchBox = () => {
    return (
      <div className="relative">
        <input
          className="bg-[#333] border-none text-white px-3 py-3 w-[240px] rounded placeholder:text-xl focus:outline-none"
          placeholder="Search..."
          type="text"
        />
        <img
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white h-6 w-6"
          src={SearchIcon}
        />
      </div>
    );
  };

  const menuHeader = () => {
    return (
      <div className="no-drag-area">
        <div className="flex">
          {userAvatar(52, 52, true)}
          <div className="w-full flex px-3 items-center">
            <p className="text-[16px]">User Name</p>
            <div
              className="mx-2 bg-[#181819] rounded-full w-[56px] flex justify-center items-center"
              title="专业版"
            >
              <img
                className="w-6 h-6 bottom-0 right-0"
                title="专业版"
                src={ProfessionalIcon}
              />
              <p className="text-sm">Pro</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-flex rounded-full my-2 bg-[#181819]  transition-all-300">
            <p
              className="hover:bg-[#333] min-w-[160px] text-left py-2 leading-[18px] rounded-l-full pl-4 pr-2"
              title="编辑签名"
            >
              这是我的签名
            </p>
            <div
              className="pl-2 flex py-2 pr-4 hover:bg-[#333] rounded-r-full"
              title="编辑状态"
            >
              {/* <p>➕</p> */}
              <p>🤣</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const siderbarOption = homeSidebarList.find((option) => {
      return option.id === location.pathname.split("/")[2];
    });
    if (siderbarOption) {
      siderbarAction(siderbarOption);
    }
  }, [location]);

  const siderbarAction = (option: SideBar) => {
    setTitle(option.title);
    setId(option.id);
    setActiveTabId(option.id);
  };

  const userAvatar = (width: number, height: number, edit = false) => {
    return (
      <div className={`relative`}>
        {edit ? (
          <div
            className="absolute w-full h-full opacity-0 bg-[#333]/40 hover:opacity-100 transition-all-300 rounded-full flex justify-center items-center"
            title="编辑头像"
            style={{ width: width + "px", height: height + "px" }}
          >
            ➕
          </div>
        ) : null}
        <img
          width={width + "px"}
          height={height + "px"}
          className="rounded-full"
          src="../../../assets/images/avatar.jpg"
          title="User Name"
        />
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <Loading
          className="bg-dark text-white font-bold"
          text="正在奋力加载..."
        />
      ) : (
        <div className="bg-dark flex w-full h-full">
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
          <div className="flex-1 flex flex-col text-white p-3 ">
            <div className="py-3 flex justify-between border-b border-b-solid border-gray-800">
              <div>
                <p className="text-[24px]">{title}</p>
                <p className="text-[12px]">
                  {id
                    .split("-")
                    .map((str) => str.toUpperCase())
                    .join("")}
                </p>
              </div>
              <div className="flex items-center">
                {/* Search box */}
                {searchBox()}
                <section className="cursor-pointer transition-all-300 rounded mx-2 p-1 mt-2">
                  {/* User infomation */}
                  <Menu header={menuHeader()} items={homeSettingItem}>
                    <div className="flex">
                      {/* Avatar */}
                      {userAvatar(36, 36)}
                    </div>
                  </Menu>
                </section>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="my-design" />} />
              <Route path="my-design" element={<MyDesign />} />
              <Route path="my-team" element={<MyTeam />} />
              <Route path="assets-bazaar" element={<AssetsBazaar />} />
              <Route path="plugin-bazaar" element={<PluginBazaar />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}
