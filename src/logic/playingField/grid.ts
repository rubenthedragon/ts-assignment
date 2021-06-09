import { Vector2 } from "../math/vector2";


export class Grid 
{
    private gridList: Vector2[] = [];

    //Create the grid here
    public CreateGrid(X: number, Y: number)
    {
        for(let x = 1; x <= X; x++)
        {
          for(let y = 1; y <= Y; y++)
          {  
              this.gridList.push(new Vector2(x,y));
          }
        }
    }

    public get getGrid(): Vector2[] {
        return this.gridList;
    }
}