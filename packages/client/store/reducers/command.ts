import { createSlice } from "@reduxjs/toolkit";
import { FunctionalType } from "../../function";

export interface CommandSliceState {
  /**
   * 当前正在使用的功能函数
   */
  useFunction: FunctionalType | null;
}

const initialState: CommandSliceState = {
  useFunction: null,
};

const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    changeUseFunction: (state, action) => {
      state.useFunction = action.payload;
    },
  },
});

export const { changeUseFunction } = commandSlice.actions;

export default commandSlice.reducer;
