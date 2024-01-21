import { configureStore } from "@reduxjs/toolkit";
import application from "./reducers/application";

export const store = configureStore({
  reducer: {
    application,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;
