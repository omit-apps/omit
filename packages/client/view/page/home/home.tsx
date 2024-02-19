import { Button, Loading } from "@any-disign/component";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { homeSidebarList } from "./home-data";

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
// @ts-ignore
import SettingIcon from "../../../assets/icon/setting.svg";

// components

export default function Home(): React.ReactElement {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
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

  const siderbarAction = (id: string) => {
    navigate(id);
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
                  trigger={true}
                  action={() => {
                    setTitle(option.title);
                    setId(option.id);
                    siderbarAction(option.id);
                  }}
                  iconSize={option.iconSize}
                  value={option.title}
                  icon={option.icon}
                />
              ))}
            </section>
            <img
              className="no-drag-area mt-auto my-2 w-[36px] cursor-pointer hover:bg-[#333] rounded-full h-[36px]"
              src={SettingIcon}
            />
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

                <section className="cursor-pointer transition-all-300 rounded mx-2 p-1 mt-2">
                  {/* User infomation */}
                  <div className="flex">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="../../../assets/images/avatar.jpg"
                        title="User Name"
                      />
                      <img
                        className="w-6 h-6 ml-2 absolute bottom-0 right-0"
                        title="专业版"
                        src={ProfessionalIcon}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Routes>
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
