import { Button } from "@omit/component";
import {
  OpenModalOptions,
  useChangeModalContent,
} from "client/hooks/use-modal";
import React, { useEffect, useState } from "react";

// This is embedded modal.
export default function ModalContainer(): React.ReactElement {
  const [title, setTitle] = useState<string | React.ReactElement>();
  const [display, setDisplay] = useState(false);
  const [child, setChild] = useState<React.ReactElement>();
  const [curOptions, setCurOptions] = useState<OpenModalOptions>();
  useEffect(() => {
    useChangeModalContent((title, children, options) => {
      setTitle(title);
      setChild(children);
      setDisplay(true);
      if (options) {
        setCurOptions(options);
      }
    });
  }, []);

  const getTitle = () => {
    if (typeof title === "string") {
      return <p className="px-2 text-xl">{title}</p>;
    }

    return title;
  };

  return (
    <>
      {display ? (
        <div className="no-drag-area flex justify-center items-center w-full h-full z-999 bg-dark/80 absolute top-0 left-0">
          <div
            className="bg-gray-800 p-4 flex flex-col text-white/80 rounded w-560px h-160px shadow-xl"
            style={
              curOptions
                ? {
                    width: curOptions.width + "px",
                    height: curOptions.height + "px",
                  }
                : null
            }
          >
            <div className="flex items-center">
              {getTitle()}
              <p
                className="ml-auto px-3 cursor-pointer text-4xl"
                onClick={() => setDisplay(false)}
                title="关闭"
              >
                ×
              </p>
            </div>
            <div className="flex-1 flex items-center">{child}</div>
            <div className="flex justify-end space-x-2">
              <Button
                action={() => {
                  setDisplay(false);
                }}
                className="px-4 bg-blue"
                type="text"
                value="确定"
              />
              <Button
                action={() => {
                  setDisplay(false);
                }}
                className="px-4 bg-[#333]"
                type="text"
                value="关闭"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
