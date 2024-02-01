import { createContainerFunction } from "./create-container";
import { createTextFunction } from "./create-text";

export * from "./create-container";
export * from "./create-text";

/**
 * 对外暴露的功能性函数
 */
const exportFunctional = { createContainerFunction, createTextFunction };

/**
 * 用于功能性函数的类型提示与声明而定义
 */
export type FunctionalType =
  (typeof exportFunctional)[keyof typeof exportFunctional];
