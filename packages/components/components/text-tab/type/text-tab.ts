import React from "react";

export type TextTabPropTypes = {
  items: TextTabItem[];
};

export interface TextTabItem {
  id: string;
  title: string;
  component: React.ReactElement;
}
