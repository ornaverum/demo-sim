import { DragListener } from "scenerystack/scenery";
import { Ball } from "../model/Ball";
import { ModelViewTransform2 } from "scenerystack/phetcommon";
import { EmptySelfOptions, optionize } from "scenerystack/phet-core";

import {
  ShadedSphereNode,
  ShadedSphereNodeOptions,
} from "scenerystack/scenery-phet";

type SelfOptions = EmptySelfOptions;
type BallNodeOptions = SelfOptions & ShadedSphereNodeOptions;


export class BallNode extends ShadedSphereNode {
    public readonly ball: Ball;

    public constructor(
        ball: Ball,
        modelViewTransform: ModelViewTransform2,
        providedOptions?: BallNodeOptions,
    ) {
        const options = optionize<
            BallNodeOptions,
            SelfOptions,
            ShadedSphereNodeOptions
        >()(
            {
                // Default values for optional ShadedSphereNodeOptions
                mainColor: ball.colorProperty.value,
            },
            providedOptions,
        );
        super(modelViewTransform.modelToViewDeltaX(ball.diameter), options);

        this.ball = ball;

        ball.positionProperty.link((position) => {
            this.translation = modelViewTransform.modelToViewPosition(position);
        });

        ball.visibleProperty.link((visible) => {
            this.visible = visible;
        });

        // ball.colorProperty.link((color) => {
        //     this.mainColor = color;
        // });

        this.addInputListener(
            new DragListener({
                allowTouchSnag: true, // When dragging across it on a touch device, pick it up
                positionProperty: ball.positionProperty,
                transform: modelViewTransform,
            }),
        );
    }

    
}