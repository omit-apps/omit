import { LayerInfo } from "../../../info/layer-info";

/**
 * Any Design 打开的文件信息
 */
export class SourceFile {
  /**
   * 文件名称
   */
  name = "";
  /**
   * 文件路径
   */
  path = "";
  /**
   * 源文件Md5值(用于判定是否打开当前文件)
   */
  md5 = "";
  /**
   * 源文件格式
   */
  ext: "ades" | "ade" = "ade";

  /**
   * 图层信息
   */
  layerInfos: LayerInfo[] = [];

  /**
   * 激活的图层
   */
  activeLayerInfo: LayerInfo = null;
  constructor() {
    // TODO: init
  }
}
