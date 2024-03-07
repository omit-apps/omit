import TextSideBar from "client/components/sidebar/text-sidebar";
import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { generalItems } from "./general-data";
import GeneralSetting from "./view/general-setting";
import Keyboard from "./view/keyboard";
import Safely from "./view/safely";

export default function General(): React.ReactElement {
  const [activeSidebarId, setActiveSidebarId] = useState("general");
  const navigate = useNavigate();
  const onSidebarChange = (id: string) => {
    setActiveSidebarId(id);
    navigate(id);
  };

  return (
    <div className="h-full flex bg-[#333]">
      <TextSideBar
        items={generalItems}
        active={activeSidebarId}
        width={120}
        onChange={onSidebarChange}
      />
      <div className="h-full w-full p-2 text-white">
        <Routes>
          <Route path="/" element={<Navigate to="general" />} />
          <Route path="/general" element={<GeneralSetting />} />
          <Route path="/keyboard" element={<Keyboard />} />
          <Route path="/safely" element={<Safely />} />
        </Routes>
      </div>
    </div>
  );
}
