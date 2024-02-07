import { Button, Loading } from "@any-disign/component";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// children pages
import MyDesign from "./pages/my-design/my-design";
import MyTeam from "./pages/my-team/my-team";
import AssetsBazaar from "./pages/assets-bazaar/assets-bazaar";
import PluginBazaar from "./pages/plugin-bazaar/plugin-bazaar";

// components

// @ts-ignore
import ProfessionalIcon from "../../../assets/icon/professional.svg";
// @ts-ignore
import ResourceLibraryIcon from "../../../assets/icon/resource-library.svg";
// @ts-ignore
import MyDesignIcon from "../../../assets/icon/my-design.svg";
// @ts-ignore
import MyTeamIcon from "../../../assets/icon/my-team.svg";
// @ts-ignore
import AssetsRepositoryIcon from "../../../assets/icon/assets-repository.svg";

const optionList = [
  {
    title: "我的设计",
    id: "my-design",
    icon: MyDesignIcon,
    iconSize: 36,
  },
  {
    title: "我的团队",
    id: "my-team",
    icon: MyTeamIcon,
    iconSize: 32,
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
    iconSize: 32,
  },
];

export default function Home(): React.ReactElement {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
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
          <div className="bg-dark-300 w-64px h-full">
            <section className="hover:bg-dark-50 cursor-pointer transition-all-300 rounded mx-2 p-1 mt-2">
              {/* User infomation */}
              <div className="flex">
                {/* Avatar */}
                <div className="relative">
                  <img
                    className="w-12 h-12 rounded"
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
            <section className="mt-4 space-y-4 flex flex-col items-center text-[16px] text-white">
              {optionList.map((option) => (
                <Button
                  className="p-2"
                  key={option.title}
                  type="icon"
                  trigger={true}
                  action={() => {
                    setTitle(option.title);
                    siderbarAction(option.id);
                  }}
                  iconSize={option.iconSize}
                  value={option.title}
                  icon={option.icon}
                />
              ))}
            </section>
          </div>
          <div className="flex-1 text-white p-3">
            <p className="text-[24px]">{title}</p>
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
