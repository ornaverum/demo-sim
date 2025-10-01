import { TModel  } from "scenerystack/joist";
import {Ball} from "./Ball.ts";
import {Vector2} from "scenerystack/dot";

export class BallsModel implements TModel {
    public readonly balls: Ball[] = [];
    public constructor(){
        this.balls.push(new Ball(
            {
                diameter: 200,
                position: new Vector2(0, 0),
                color: "red"
            }
        ));

    }

    public reset():void{
        this.balls.forEach(ball => ball.reset());
    }
}

