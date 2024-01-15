/// <reference types="react" />

/**
 * Tab component props type.
 */
declare interface TabPropsType {
  tabList: TabOption[];
  children?: React.ReactElement;
}

/**
 * A tab option.
 */
declare interface TabOption {
  title: string;
  key: string;
  component: React.ReactElement;
}

declare interface TabHeaderPropsType {
  tabList: TabOption[];
  changeEventProcessor: (tabKey: string) => void;
}

declare interface TabOptionPropsType {
  title: string;
  key: string;
}
