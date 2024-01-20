export interface OptionPropsType {
  text: string;
  title?: string;
  action?: Action;
  type?: OptionType;
}

export type OptionType = "text" | "selector";
