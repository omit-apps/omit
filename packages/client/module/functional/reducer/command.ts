import { createSlice } from "@reduxjs/toolkit";
import { FunctionalType } from "..";

export interface CommandSliceState {
  /**
   * 当前正在使用的功能函数
   */
  useFunction: FunctionalType;
  /**
   * 解除订阅的回调
   */
  unsubscription: () => void;
}

const initialState: CommandSliceState = {
  useFunction: null,
  unsubscription: null,
};

const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    changeUseFunction: (state, action) => {
      state.useFunction = action.payload;
    },
    setUnsubscription: (state, action) => {
      state.unsubscription = action.payload;
    },
    clearUnsubscription: (state) => {
      state.unsubscription();
      state.unsubscription = null;
    },
  },
});

// Note: No allow use imoprt { changeUseFunction } from "./command.ts", you must be from to "client/module/functional" import.
export const { changeUseFunction, clearUnsubscription, setUnsubscription } =
  commandSlice.actions;

export const reducer = commandSlice.reducer;
