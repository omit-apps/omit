import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// children pages
import AssetsBazaar from "./pages/assets-bazaar/assets-bazaar";
import MyDesign from "./pages/my-design/my-design";
import MyTeam from "./pages/my-team/my-team";
import PluginBazaar from "./pages/plugin-bazaar/plugin-bazaar";

// components
import { Loading, Menu, MenuRefTypes, SearchBox } from "@omit/component";
import { useOpenModal } from "client/hooks/use-modal";
import { SearchPanel } from "client/modal/search-panel";
import LeftSiderbar from "./components/left-sidebar";
import UserAvatar from "./components/user-avatar";
import UserMenuHeader from "./components/user-menu-header";
import { homeSettingItem } from "./home-data";
import MyMessage from "./pages/my-message/my-message";

export default function Home(): React.ReactElement {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const menuRef = useRef<MenuRefTypes>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  const openSearchModal = () => {
    useOpenModal(
      <SearchBox className="w-740px mt-2" placeholder="检索你想要的内容" />,
      <SearchPanel />,
      {
        width: 800,
        height: 420,
      }
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
          <LeftSiderbar
            onChange={(title, id) => {
              setId(id);
              setTitle(title);
            }}
          />
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
                <SearchBox dropMenu={false} action={openSearchModal} />
                <section className="cursor-pointer transition-all-300 rounded mx-2 p-1 mt-2">
                  {/* User infomation */}
                  <Menu
                    ref={menuRef}
                    header={
                      <UserMenuHeader
                        action={() => {
                          menuRef.current.setMenuDisplayStatus(false);
                        }}
                      />
                    }
                    items={homeSettingItem}
                  >
                    <div className="flex">
                      {/* Avatar */}
                      <UserAvatar width={36} height={36} />
                    </div>
                  </Menu>
                </section>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="my-design" />} />
              <Route path="my-design" element={<MyDesign />} />
              <Route path="my-team" element={<MyTeam />} />
              <Route path="my-message" element={<MyMessage />} />
              <Route path="assets-bazaar" element={<AssetsBazaar />} />
              <Route path="plugin-bazaar" element={<PluginBazaar />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}
