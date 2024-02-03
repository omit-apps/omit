import { createContainerFunction } from "./function/create-container";
import { createTextFunction } from "./function/create-text";

export * from "./function/create-container";
export * from "./function/create-text";

/**
 * 对外暴露的功能性函数
 */
const exportFunctional = { createContainerFunction, createTextFunction };

/**
 * 用于功能性函数的类型提示与声明而定义
 */
export type FunctionalType =
  (typeof exportFunctional)[keyof typeof exportFunctional];
