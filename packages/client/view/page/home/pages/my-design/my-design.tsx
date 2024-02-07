import Folder from "../../../../../components/folder/folder";
import React from "react";

export default function MyDesign(): React.ReactElement {
  return (
    <div className="text-white p-4">
      <div className="h-120px"></div>
      {/* Folder Container */}
      <div>
        <Folder />
      </div>
    </div>
  );
}
