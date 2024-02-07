import React from "react";

export default function Folder(): React.ReactElement {
  return (
    <div className="py-2 w-25 cursor-pointer px-4 rounded transition-all-300 inline-block hover:bg-dark-50">
      <img
        className="w-24"
        draggable={false}
        src="../../assets/images/folder.png"
      />
      <p
        className="font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap"
        title="Folder Name"
      >
        Folder Name
      </p>
    </div>
  );
}
