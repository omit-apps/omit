import { Button } from "@omit/component";
import { RootState, dispatch } from "client/store";
import React from "react";
import { useSelector } from "react-redux";
import { closeModal } from "../reducers/modal-reducer";

// This is embedded modal.
export function ModalContainer(): React.ReactElement {
  const modalState = useSelector((state: RootState) => state.modal);

  const getTitle = () => {
    if (typeof modalState.title === "string") {
      return <p className="px-2 text-xl">{modalState.title}</p>;
    }

    return modalState.title;
  };

  return (
    <>
      {modalState.show ? (
        <div className="no-drag-area flex justify-center items-center w-full h-full z-999 bg-dark/80 absolute top-0 left-0">
          <div
            className="bg-gray-800 p-4 flex flex-col text-white/80 rounded w-560px h-160px shadow-xl"
            style={
              modalState.options
                ? {
                    width: modalState.options.width + "px",
                    height: modalState.options.height + "px",
                  }
                : null
            }
          >
            <div className="flex items-center">
              {getTitle()}
              <p
                className="ml-auto px-3 cursor-pointer text-4xl"
                onClick={() => {
                  dispatch(closeModal());
                }}
                title="关闭"
              >
                ×
              </p>
            </div>
            <div className="flex-1 flex items-center">
              {modalState.activeModal}
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                action={() => {
                  dispatch(closeModal());
                }}
                className="px-4 bg-blue"
                type="text"
                value="确定"
              />
              <Button
                action={() => {
                  dispatch(closeModal());
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
