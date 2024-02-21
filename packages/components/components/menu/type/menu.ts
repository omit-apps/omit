import React from "react";

export interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  // Generate break line on the top.
  breakLine?: boolean;
  action?: () => void;
}

export interface MenuPropsType {
  children?: React.ReactElement;
  header?: React.ReactElement;
  className?: string;
  items?: MenuItem[];
  mode?: "icon" | "text" | "mixin";
  // Custom item content render.
  itemRenderer?: (item: MenuItem) => React.ReactElement;
}
