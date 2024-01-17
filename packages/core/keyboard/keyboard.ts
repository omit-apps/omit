export class KeyboardBlcok {
  /**
   * 触发键位
   */
  key: KeyCode[];
  /**
   * 触发动作
   */
  downAction: Action;
  /**
   * 松开动作
   */
  upAction: Action;

  constructor(key: KeyCode[], downAction: Action, upAction?: Action) {
    this.key = key;
    this.downAction = downAction;
    this.upAction = upAction;
  }
}

export enum KeyCode {
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  E = "e",
  F = "f",
  G = "g",
  H = "h",
  I = "i",
  J = "j",
  K = "k",
  L = "l",
  M = "m",
  N = "n",
  O = "o",
  P = "p",
  Q = "q",
  R = "r",
  S = "s",
  T = "t",
  U = "u",
  V = "v",
  W = "w",
  X = "x",
  Y = "y",
  Z = "z",
  Num0 = "0",
  Num1 = "1",
  Num2 = "2",
  Num3 = "3",
  Num4 = "4",
  Num5 = "5",
  Num6 = "6",
  Num7 = "7",
  Num8 = "8",
  Num9 = "9",
  Ctrl = "Ctrl",
  Shift = "Shift",
  Tab = "Tab",
  CapsLock = "CapsLock",
  Enter = "Enter",
  Backspace = "Backspace",
  Alt = "Alt",
  Insert = "Insert",
  Delete = "Delete",
  Home = "Home",
  End = "End",
  PageUp = "PageUp",
  PageDown = "PageDown",
  Space = "Space",
  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  F6 = "F6",
  F7 = "F7",
  F8 = "F8",
  F9 = "F9",
  F10 = "F10",
  F11 = "F11",
  F12 = "F12",
  Esc = "Esc",
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
  Mouse0 = "Mouse0",
  Mouse1 = "Mouse1",
  Mouse2 = "Mouse2",
}
