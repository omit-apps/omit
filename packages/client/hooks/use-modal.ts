import React from "react";

export type ChangeModalContentCallback = (
  title: string,
  children: React.ReactElement
) => void;

let callback: ChangeModalContentCallback | null = null;

type ModalConfirmCallback<Arg> = (arg: Arg) => void;

export function useOpenModal(title: string, modal: React.ReactElement) {
  callback(title, modal);
}

export function useChangeModalContent(cb: ChangeModalContentCallback) {
  callback = cb;
}
