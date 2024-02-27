import MemePanel from "client/components/meme-panel/meme-panel";
import React, { useState } from "react";

export default function EditStatus(): React.ReactElement {
  const [memePanelStatus, setMemePanelStatus] = useState(false);
  const [currentMeme, setCurrentMeme] = useState("");
  return (
    <div className="w-full">
      <div className="flex w-full bg-gray-700 rounded-full overflow-hidden relative">
        <p
          className="cursor-pointer text-2xl hover:bg-[#666] py-2 px-2 transition-all-300 h-full"
          onClick={() => setMemePanelStatus(true)}
          title="编辑状态"
        >
          {currentMeme.length ? currentMeme : "🤣"}
        </p>
        <input
          className="outline-none text-xl mr-4 w-full border-none bg-transparent text-white placeholder:text-white/60"
          placeholder="表达一下此刻的心情"
          type="text"
        />
      </div>
      {memePanelStatus ? (
        <MemePanel
          className="absolute"
          confirmCallback={(memeUncode) => {
            setCurrentMeme(memeUncode);
            setMemePanelStatus(false);
          }}
        />
      ) : null}
    </div>
  );
}
