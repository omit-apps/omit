/**
 * Tab component props type.
 */
export interface TabPropsType {
  tabList: TabOption[];
  children?: React.ReactElement;
  noOption?: string | React.ReactElement;
  activeTabChangeEvent?: Action<TabOption | null>;
}

/**
 * A tab option.
 */
export interface TabOption {
  title: string;
  key: string;
  component: React.ReactElement;
}

export interface TabHeaderPropsType {
  tabList: TabOption[];
  changeEventProcessor: (tabKey: string) => void;
}

export interface TabOptionPropsType {
  title: string;
  id: string;
  action?: Action<string>;
}

export interface TabContainerPropsType {
  children: React.ReactElement;
}
