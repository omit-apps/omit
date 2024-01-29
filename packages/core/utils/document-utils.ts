type CursorType =
  | "default"
  | "pointer"
  | "grab"
  | "none"
  | "text"
  | "move"
  | "grabbing"
  | "col-resize"
  | "row-resize"
  | "zoom-in"
  | "zoom-out";

export function changeCursorStyle(type: CursorType) {
  document.body.style.cursor = type;
}
