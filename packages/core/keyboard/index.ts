import { KeyCode, KeyboardBlcok } from "./keyboard";
// 导出给外部使用的API
export { KeyboardBlcok, KeyCode } from "./keyboard";

export type KeyEvent = KeyboardEvent | MouseEvent;

// 键盘映射列表
const keyRefList: KeyboardBlcok[] = [];

/**
 * 注册按键信息
 * @param keyboard 按键映射信息
 */
export function registerKeyboard(keyboard: KeyboardBlcok) {
  keyRefList.push(keyboard);
}

/**
 * 注册键盘触发器
 * @param codes 触发的键盘代码
 */
export function registerKeyboardDown(e: KeyEvent) {
  const pressKeys = extractEventKeyCode(e);
  checkKeyPress(pressKeys, (refInfo) => {
    refInfo.downAction();
  });
}

export function registerKeyboardUp(e: KeyEvent) {
  const pressKeys = extractEventKeyCode(e);
  checkKeyPress(pressKeys, (refInfo) => {
    refInfo.upAction();
  });
}

/**
 * 检测快捷键组是否被按下
 * @param pressKeys 按下的Keys
 * @param action 按下执行的动作
 */
function checkKeyPress(pressKeys: KeyCode[], action: Action<KeyboardBlcok>) {
  for (const refInfo of keyRefList) {
    if (
      pressKeys.length === refInfo.key.length &&
      refInfo.key.every((key) => pressKeys.includes(key))
    ) {
      action(refInfo);
      break;
    }
  }
}

/**
 * 提取Event中的快捷键组
 * @param e 键盘或鼠标事件
 * @returns 按键组
 */
function extractEventKeyCode(e: KeyEvent): KeyCode[] {
  const keyCodeList: KeyCode[] = [];
  if (e.ctrlKey) {
    keyCodeList.push(KeyCode.Ctrl);
  }

  if (e.altKey) {
    keyCodeList.push(KeyCode.Alt);
  }

  if (e.shiftKey) {
    keyCodeList.push(KeyCode.Shift);
  }

  if (e instanceof KeyboardEvent) {
    if (e.code === "Space") {
      keyCodeList.push(KeyCode.Space);
    } else {
      // 如果是键盘事件
      const keyCode = e.key.length === 1 ? e.key.toLocaleLowerCase() : e.key;
      // @ts-ignore
      keyCodeList.push(KeyCode[keyCode]);
    }
  } else if (e instanceof MouseEvent) {
    // 如果是鼠标事件
    // @ts-ignore
    keyCodeList.push(KeyCode["Mouse" + e.button]);
  }

  return keyCodeList;
}
