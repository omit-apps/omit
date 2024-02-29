import {
  KeyEvent,
  registerKeyboardDown,
  registerKeyboardUp,
} from "@omit/core";
import { useEffect } from "react";

/**
 * 使用快捷键注册
 */
export function useKeyboardRegister() {
  useEffect(() => {
    subKeyboardEventHandler();
    return unsubKeyboardEventHandler;
  }, []);

  /**
   * 键盘按下事件注册
   * @param e
   */
  const registerEventHandler = (e: KeyEvent) => {
    registerKeyboardDown(e);
  };

  /**
   * 键盘弹起事件注册
   * @param e
   */
  const registerEventHandler2 = () => {
    registerKeyboardUp();
  };

  const subKeyboardEventHandler = () => {
    document.addEventListener("keydown", registerEventHandler);
    document.addEventListener("mousedown", registerEventHandler);
    document.addEventListener("keyup", registerEventHandler2);
    document.addEventListener("mouseup", registerEventHandler2);
    document.addEventListener("wheel", registerEventHandler);
  };

  const unsubKeyboardEventHandler = () => {
    document.removeEventListener("keydown", registerEventHandler);
    document.removeEventListener("mousedown", registerEventHandler);
    document.removeEventListener("keyup", registerEventHandler2);
    document.removeEventListener("mouseup", registerEventHandler2);
    document.addEventListener("wheel", registerEventHandler);
  };
}
