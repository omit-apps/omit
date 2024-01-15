declare interface OptionPropsType {
  text: string;
  title?: string;
  action?: Action;
  type?: OptionType;
}

declare type OptionType = "text" | "selector";
