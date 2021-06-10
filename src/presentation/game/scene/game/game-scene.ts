import { Context } from "../../../context";
import { PixiScene } from "../pixi-scene";
import { PixiSceneManager } from "../pixi-scene-manager";
import * as PIXI from "pixi.js";
import { PixiAnimatedSprite } from "../../pixi/pixi-animated-sprite";
import { Vector2 } from "../../../../logic/math/vector2";
import { Grid } from "../../../../logic/playingField/grid";
import { Constants } from "../../../../data/Constants";
import { Stopwatch } from "../../../../logic/stopwatch";

export class GameScene extends PixiScene {

  private grid: Grid = new Grid();
  
  constructor(context: Context, manager: PixiSceneManager) {
    super(manager);
    this.grid.CreateGrid(10,10); 
    this.draw(context);
    const timer = Stopwatch();
    context.audioManager.playSound("backgroundSound");
  }

  draw(context: Context) {
    this.drawBoard(context);
  }

  drawBoard(context: Context) {
    const gridTile = context.pixiAssetLoader.getResource("gridTile");

    //Calculate the highest y value
    let maxX = 0;
    for(let i = 1; i < this.grid.getGrid.length; i++){
      maxX = Math.max(this.grid.getGrid[i].x, maxX);
    }

    //Calculate the highest x value
    let maxY = 0;
    for(let i = 1; i < this.grid.getGrid.length; i++){
      maxY = Math.max(this.grid.getGrid[i].y, maxY);
    }

    //To put the grid perfectly in the middle
    let sidelinesX = ((context.appSize.x -(maxX * Constants.tileSize))/2)-(0.5*Constants.tileSize);
    let sidelinesY = ((context.appSize.y -(maxY * Constants.tileSize))/2)-(0.5*Constants.tileSize);

    //Now draw the grid
    this.grid.getGrid.forEach(element => {
      const sprite = new PIXI.Sprite(gridTile.texture);
        sprite.position.set(sidelinesX + (element.x * Constants.tileSize), sidelinesY + (element.y * Constants.tileSize));
        sprite.anchor.set(0.5, 0.5);
        this.container.addChild(sprite);
    });
  }
}
