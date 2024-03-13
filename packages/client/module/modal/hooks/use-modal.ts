import { dispatch } from "client/store";
import React from "react";
import { notifyModal } from "../reducers/modal-reducer";
import { OpenModalOptions } from "../type/modal-types";

export function useOpenModal(
  title: string | React.ReactElement,
  modal: React.ReactElement | (() => React.ReactElement),
  options?: OpenModalOptions
) {
  dispatch(notifyModal({ title: title, activeModal: modal, options: options }));
}
