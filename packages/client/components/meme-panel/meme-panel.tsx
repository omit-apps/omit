import React from "react";

export type MemePanelPropType = {
  className?: string;
  confirmCallback?: (memeUncode: string) => void;
};

const meneList = [
  "😂",
  "😊",
  "🤣",
  "😍",
  "👍",
  "😒",
  "😎",
  "\uD83C\uDF07",
  "\uD83C\uDF08",
  "\uD83C\uDF09",
  "\uD83C\uDF11",
  "\uD83C\uDF12",
  "\uD83C\uDF13",
];

export default function MemePanel(
  props: MemePanelPropType
): React.ReactElement {
  return (
    <div className={`bg-transparent ${props.className}`}>
      <div className="ml-2 mt-3 z-1 w-6 h-6 bg-white rotate-45deg absolute"></div>
      <div className="absolute w-[217px] flex-wrap z-2 p-2 mt-4 bg-white text-2xl inline-block rounded overflow-hidden flex">
        {meneList.map((meneUncode) => (
          <p
            className="hover:bg-dark/20 p-1 cursor-pointer transition-all-200"
            onClick={() => props.confirmCallback?.(meneUncode)}
          >
            {meneUncode}
          </p>
        ))}
      </div>
    </div>
  );
}
