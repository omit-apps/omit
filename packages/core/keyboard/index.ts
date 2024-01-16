import { KeyCode } from "./keyboard";
// export object
export { KeyboardEvent, KeyCode } from "./keyboard";

const keyRefList: KeyboardEvent[] = [];
/**
 * 注册按键信息
 * @param keyboard 按键映射信息
 */
export function registerKeyboard(keyboard: KeyboardEvent) {
  // TODO: 注册键盘事件
}

/**
 * 注册键盘触发器
 * @param codes 触发的键盘代码
 */
export function registerKeyboardTrigger(codes: KeyCode[]) {
  // TODO: 注册触发器
}
