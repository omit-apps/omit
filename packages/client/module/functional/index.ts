import { createContainerFunction } from "./function/create-container";
import { createTextFunction } from "./function/create-text";

export * from "./function/create-container";
export * from "./function/create-text";

// Export redux slice and actions.
export * from "./reducer/command";
// Export about hooks for functional.
export * from "./hook/use-command";

/**
 * Export functional for outside.
 */
const exportFunctional = { createContainerFunction, createTextFunction };

/**
 * Defined for type hints and declarations of functional functions.
 */
export type FunctionalType =
  (typeof exportFunctional)[keyof typeof exportFunctional];
