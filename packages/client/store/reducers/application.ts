import { createSlice } from "@reduxjs/toolkit";
import { type Canvas } from "@any-disign/core";

export interface ApplicationState {
  activeCanvas: Canvas | null;
}

const initialState: ApplicationState = {
  activeCanvas: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    changeActiveCanvas: (state, action) => {
      state.activeCanvas = action.payload;
    },
  },
});

export const { changeActiveCanvas } = applicationSlice.actions;

export default applicationSlice.reducer;
