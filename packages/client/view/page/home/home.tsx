import { Button, Loading } from "@any-disign/component";
import React, { useEffect, useState } from "react";

// @ts-ignore
import Professional from "../../../assets/icon/professional.svg";
// @ts-ignore
import ResourceLibrary from "../../../assets/icon/resource-library.svg";
// @ts-ignore
import MyDesign from "../../../assets/icon/my-design.svg";
// @ts-ignore
import MyTeam from "../../../assets/icon/my-team.svg";
// @ts-ignore
import AssetsRepository from "../../../assets/icon/assets-repository.svg";

const optionList = [
  {
    title: "我的设计",
    icon: MyDesign,
    iconSize: 36,
  },
  {
    title: "我的团队",
    icon: MyTeam,
    iconSize: 32,
  },
  {
    title: "资源市场",
    icon: AssetsRepository,
    iconSize: 32,
  },
  {
    title: "插件市场",
    icon: ResourceLibrary,
    iconSize: 32,
  },
];

export default function Home(): React.ReactElement {
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
  return (
    <>
      {loading ? (
        <Loading
          className="bg-dark text-white font-bold"
          text="正在奋力加载..."
        />
      ) : (
        <div className="bg-dark flex w-full h-full">
          <div className="bg-dark-300 w-86px h-full">
            <section className="hover:bg-dark-50 cursor-pointer transition-all-300 rounded mx-2 p-2 mt-2">
              {/* User infomation */}
              <div className="flex">
                {/* Avatar */}
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded"
                    src="../../../assets/images/avatar.jpg"
                    title="User Name"
                  />
                  <img
                    className="w-6 h-6 ml-2 absolute bottom-0 right-0"
                    title="专业版"
                    src={Professional}
                  />
                </div>
              </div>
            </section>
            <section className="mt-4 space-y-2 flex flex-col items-center text-[16px] text-white">
              {optionList.map((option) => (
                <Button
                  className="p-4"
                  key={option.title}
                  type="icon"
                  trigger={true}
                  action={() => setTitle(option.title)}
                  iconSize={option.iconSize}
                  value={option.title}
                  icon={option.icon}
                />
              ))}
            </section>
          </div>
          <div className="flex-1 text-white p-3">
            <p className="text-[24px]">{title}</p>
          </div>
        </div>
      )}
    </>
  );
}
