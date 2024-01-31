/**
 * 功能性函数的类型定义
 */
export interface FunctionalFunctions<T extends (...params: any) => void> {
  title: string;
  id: string;
  execute: T;
}

export type FunctionUnsubscribe = () => void;
