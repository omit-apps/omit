export class MenuItem {
  id: string;
  title: string;
  icon?: any;
  action: () => void;
}

export type Vector2 = { x: number; y: number };
