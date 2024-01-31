import Konva from "konva";
import { NodeConfig, Node } from "konva/lib/Node";

/**
 * 激活元素的控制器
 */
export class ActiveTransformer extends Konva.Transformer {
  /**
   * 控制点
   */
  vertexs: Konva.Circle[] = [];
  constructor() {
    super({
      rotateEnabled: false,
      resizeEnabled: false,
    });
    this.initOrRefreshVertex();
  }

  /**
   * 初始化或者刷新Transformer中边角的控制点
   */
  private initOrRefreshVertex() {
    /**
     * vertex的坐标，根据transformer的宽高进行计算
     */
    const pointList: Konva.Vector2d[] = [
      { x: 30, y: 30 },
      { x: this.width() - 30, y: 30 },
      { x: this.width() - 30, y: this.height() - 30 },
      { x: 30, y: this.height() - 30 },
    ];
    if (this.vertexs.length === 0) {
      for (let i = 0; i < 4; i++) {
        const vertex = new Konva.Circle({
          radius: 5,
          stroke: "#87CEFA",
        });
        vertex.setPosition(pointList[i]);

        this.vertexs.push(vertex);
        this.add(vertex);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const vertex = this.vertexs[i];
        vertex.setPosition(pointList[i]);
      }
    }
  }

  /**
   * 重写父类的setNodes
   * @param nodes
   * @returns
   */
  setNodes(nodes?: Node<NodeConfig>[]): this {
    super.setNodes(nodes);
    this.initOrRefreshVertex();
    return this;
  }
}
