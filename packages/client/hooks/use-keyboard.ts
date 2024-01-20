import {
  KeyEvent,
  registerKeyboardDown,
  registerKeyboardUp,
} from "@any-disign/core";
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
  const registerEventHandler = (e: KeyboardEvent | MouseEvent) => {
    registerKeyboardDown(e);
  };

  /**
   * 键盘弹起事件注册
   * @param e
   */
  const registerEventHandler2 = (e: KeyEvent) => {
    registerKeyboardUp(e);
  };

  const subKeyboardEventHandler = () => {
    document.addEventListener("keydown", registerEventHandler);
    document.addEventListener("mousedown", registerEventHandler);
    document.addEventListener("keyup", registerEventHandler2);
    document.addEventListener("mouseup", registerEventHandler2);
  };

  const unsubKeyboardEventHandler = () => {
    document.removeEventListener("keydown", registerEventHandler);
    document.removeEventListener("mousedown", registerEventHandler);
    document.removeEventListener("keyup", registerEventHandler2);
    document.removeEventListener("mouseup", registerEventHandler2);
  };
}
