import React from "react";

export type OpenModalOptions = {
  width?: number;
  height?: number;
};

export type ChangeModalContentCallback = (
  title: string | React.ReactElement,
  children: React.ReactElement,
  options: OpenModalOptions
) => void;

let callback: ChangeModalContentCallback | null = null;

type ModalConfirmCallback<Arg> = (arg: Arg) => void;

export function useOpenModal(
  title: string | React.ReactElement,
  modal: React.ReactElement,
  options?: OpenModalOptions
) {
  callback(title, modal, options);
}

export function useChangeModalContent(cb: ChangeModalContentCallback) {
  callback = cb;
}
