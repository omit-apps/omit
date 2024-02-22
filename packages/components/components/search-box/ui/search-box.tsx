import React, { useState } from "react";

const SearchIcon = (
  <svg
    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white h-6 w-6"
    color="white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export function SearchBox(): React.ReactElement {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="relative">
      <div className="relative">
        <input
          className="bg-[#333] border-none text-white px-3 py-3 w-[240px] rounded placeholder:text-xl focus:outline-none"
          placeholder="Search..."
          type="text"
          onFocus={() => {
            setDropdown(true);
          }}
          onBlur={() => {
            setDropdown(false);
          }}
        />
        {SearchIcon}
      </div>
      {dropdown ? (
        <div className="absolute transition-all w-full bg-[#333] h-300px top-100% shadow-xl rounded-b">
          <div className="mx-4 b-t-gray-600 b-t-solid b-t my-2"></div>
        </div>
      ) : null}
    </div>
  );
}
