import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

import application from "./reducers/application";
import command from "./reducers/command";

enableMapSet();

export const store = configureStore({
  reducer: {
    application,
    command,
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
