import { Layer } from "@any-design/core";

/**
 * 图层信息
 */
export interface LayerInfo {
  id: string;
  name: string;
  lock: boolean;
  visible: boolean;
  /**
   * 给Group类型的用
   */
  children?: LayerInfo[];
}

export function makeLayerInfo(layer: Layer): LayerInfo {
  return {
    id: layer.id(),
    name: layer.name(),
    lock: false,
    visible: true,
  };
}
