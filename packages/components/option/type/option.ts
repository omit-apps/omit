export interface OptionPropsType {
  text: string;
  active?: boolean;
  title?: string;
  action?: Action;
  type?: OptionType;
}

export type OptionType = "text" | "selector";
