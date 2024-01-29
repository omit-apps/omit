import { configureStore } from "@reduxjs/toolkit";
import application from "./reducers/application";
import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
  reducer: {
    application,
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
