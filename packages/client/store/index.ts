import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

import { reducer as file } from "../module/file/reducer/file-slice";
import { reducer as command } from "../module/functional/reducer/command";
import { reducer as menu } from "../module/menu";

enableMapSet();

export const store = configureStore({
  reducer: {
    file,
    command,
    menu,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const dispatch = store.dispatch;

export const getState = store.getState;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;
