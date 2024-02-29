import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../type/menu-item";

type MenuSliceInitalStateType = {
  // Exhibition menu item on notify menu component.
  renderItems: MenuItem[];
};

const initialState: MenuSliceInitalStateType = {
  renderItems: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    notifyMenu: (actions, payload) => {
      // TODO: Active menu global component.
    },
  },
});

export const { notifyMenu } = menuSlice.actions;

export const reducer = menuSlice.reducer;
