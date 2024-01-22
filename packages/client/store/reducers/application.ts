import { createSlice } from "@reduxjs/toolkit";
import { LayerInfo } from "../../components/layer/layer-info";

export interface ApplicationState {
  layerInfo: LayerInfo[];
}

const initialState: ApplicationState = {
  layerInfo: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    refershLayerInfo: (state, action) => {
      state.layerInfo = action.payload;
    },
    addLayerInfo: (state, action) => {
      state.layerInfo = state.layerInfo.concat([action.payload]);
    },
  },
});

export const { refershLayerInfo, addLayerInfo } = applicationSlice.actions;

export default applicationSlice.reducer;
