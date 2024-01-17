import {
  KeyEvent,
  registerKeyboardDown,
  registerKeyboardUp,
} from "@any-disign/core";
import { useEffect } from "react";

export function useKeyboardRegister() {
  useEffect(() => {
    subKeyboardEventHandler();
    return unsubKeyboardEventHandler;
  }, []);

  const registerEventHandler = (e: KeyboardEvent | MouseEvent) =>
    registerKeyboardDown(e);

  const registerEventHandler2 = (e: KeyEvent) => registerKeyboardUp(e);

  const subKeyboardEventHandler = () => {
    document.addEventListener("keypress", registerEventHandler);
    document.addEventListener("mousedown", registerEventHandler);
    document.addEventListener("keyup", registerEventHandler2);
    document.addEventListener("mouseup", registerEventHandler2);
  };

  const unsubKeyboardEventHandler = () => {
    document.removeEventListener("keypress", registerEventHandler);
    document.removeEventListener("mousedown", registerEventHandler);
    document.removeEventListener("keyup", registerEventHandler2);
    document.removeEventListener("mouseup", registerEventHandler2);
  };
}
