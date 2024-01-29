import Konva from "konva";
import { NodeConfig, Node } from "konva/lib/Node";

export class ActiveTransformer extends Konva.Transformer {
  vertexs: Konva.Circle[] = [];
  constructor() {
    super({
      rotateEnabled: false,
      resizeEnabled: false,
    });
    this.initOrRefreshVertex();
  }

  private initOrRefreshVertex() {
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

  setNodes(nodes?: Node<NodeConfig>[]): this {
    super.setNodes(nodes);
    this.initOrRefreshVertex();
    return this;
  }
}
