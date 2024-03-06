import { dispatch } from "client/store";
import { MenuItem, Vector2 } from "../type/menu-item";
import { notifyMenu } from "../reducer/menu";

export function useMenu(e: MouseEvent, items: MenuItem[]) {
  const pos: Vector2 = { x: e.clientX, y: e.clientY };
  dispatch(notifyMenu({ pos, items }));
}
