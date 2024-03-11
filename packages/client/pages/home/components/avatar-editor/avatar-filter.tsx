import React from "react";

const filterStyle = [
  "contrast-125",
  "contrast-50",
  "grayscale",
  "hue-rotate-90",
  "-hue-rotate-60",
  "sepia",
  "brightness-125",
  "hue-rotate-180",
];

export default function AvatarFilter(): React.ReactElement {
  return (
    <div className=" flex-wrap space-x-4 space-y-4">
      {filterStyle.map((styleClass) => (
        <img
          src="../../../../assets/images/avatar.jpg"
          className={`${styleClass} cursor-pointer`}
          width={64}
          height={64}
        />
      ))}
    </div>
  );
}
