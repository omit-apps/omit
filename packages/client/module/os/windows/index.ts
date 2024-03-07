import {
  registerCreateWindowEvent,
  registerOpenModalEvent,
} from "./events/window-events";

export * from "./main/main-window";

export function registerWindowEvent() {
  registerOpenModalEvent();
  registerCreateWindowEvent();
}
