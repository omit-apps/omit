declare interface ButtonProps {
  value?: string;
  icon?: string;
  iconSize?: number;
  type: ButtonType;
  border?: boolean;
  action?: Action;
  className?: string;
}

declare type ButtonType = "text" | "icon" | "mixin";
