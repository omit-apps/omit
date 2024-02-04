export interface OptionPropsType {
  text: string;
  active?: boolean;
  title?: string;
  action?: Action<MouseEvent>;
  type?: OptionType;
}

export type OptionType = "text" | "selector";
