import { createSlice } from "@reduxjs/toolkit";
import {
  ModalInitialStateType,
  NotifyModalPayloadType,
} from "../type/modal-types";

const initialState: ModalInitialStateType = {
  show: false,
  title: "",
  activeModal: null,
  options: {
    width: 0,
    height: 0,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    notifyModal: (state, action: { payload: NotifyModalPayloadType }) => {
      state.show = true;
      state.title = action.payload.title;
      state.activeModal = action.payload.activeModal;
      state.options = action.payload.options;
    },
    closeModal: (state) => {
      state.show = false;
      state.activeModal = null;
    },
  },
});

export const { notifyModal, closeModal } = modalSlice.actions;

export const reducer = modalSlice.reducer;
