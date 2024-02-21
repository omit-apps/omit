export interface ButtonProps {
  value?: string;
  icon?: string;
  iconSize?: number;
  type: ButtonType;
  border?: boolean;
  action?: Action;
  trigger?: boolean;
  className?: string;
  active?: boolean;
}

export type ButtonType = "text" | "icon" | "mixin";
