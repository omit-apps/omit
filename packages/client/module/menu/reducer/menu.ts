import { createSlice } from "@reduxjs/toolkit";
import { MenuItem, Vector2 } from "../type/menu-item";

type MenuSliceInitalStateType = {
  show: boolean;
  // Exhibition menu item on notify menu component.
  renderItems: MenuItem[];
  open: boolean;
  position: Vector2;
};

type NotifyMenuPayload = {
  pos: Vector2;
  items: MenuItem[];
};

const initialState: MenuSliceInitalStateType = {
  show: false,
  renderItems: [],
  open: false,
  position: {
    x: 0,
    y: 0,
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    notifyMenu: (state, action: { payload: NotifyMenuPayload }) => {
      state.position = action.payload.pos;
      state.show = true;
      state.renderItems = action.payload.items;
    },
    closeMenu: (state) => {
      state.show = false;
      state.renderItems = [];
    },
  },
});

export const { notifyMenu, closeMenu } = menuSlice.actions;

export const reducer = menuSlice.reducer;
