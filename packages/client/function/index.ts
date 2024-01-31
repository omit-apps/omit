import { createContainerFunction } from "./create-container";
export * from "./create-container";

const exportFunctional = { createContainerFunction };

export type FunctionalType =
  (typeof exportFunctional)[keyof typeof exportFunctional];
