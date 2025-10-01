// Copyright 2021-2024, University of Colorado Boulder

import { EmptySelfOptions } from "scenerystack/phet-core";
import { ScreenView, ScreenViewOptions } from "scenerystack/sim";
import { MagnetsBallModel } from "../model/MagnetsBallModel";
import { Vector2 } from "scenerystack/dot";
import { ModelViewTransform2 } from "scenerystack/phetcommon";
import { BarMagnetNode } from "./BarMagnetNode";
import { MagnetsControlPanel } from "./MagnetsControlPanel";
import { DemoSimConstants } from "../../common/DemoSimConstants";
import { ResetAllButton } from "scenerystack/scenery-phet";
import { BallNode } from "./BallNode";

/**
 * MagnetsScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

type SelfOptions = EmptySelfOptions;

type MagnetsScreenViewOptions = SelfOptions & ScreenViewOptions;

export class MagnetsScreenView extends ScreenView {
  /**
   * model - the top-level model for this screen
   */
  public constructor(
    model: MagnetsBallModel,
    providedOptions?: MagnetsScreenViewOptions,
  ) {
    super(providedOptions);

    // transform between model coordinates and view coordinates
    const center = new Vector2(
      this.layoutBounds.width / 2,
      this.layoutBounds.height / 2,
    );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping(
      center,
      1,
    );

    // Add a magnet. The model determines its position.
    this.addChild(new BarMagnetNode(model.barMagnets[0], modelViewTransform));
    this.addChild(new BarMagnetNode(model.barMagnets[1], modelViewTransform));
    this.addChild(new BallNode(model.ball, modelViewTransform));

    // Add the control panel for magnets, positioned at the top-right of the screen.
    this.addChild(
      new MagnetsControlPanel(model, {
        right: this.layoutBounds.right - DemoSimConstants.SCREEN_VIEW_X_MARGIN,
        top: this.layoutBounds.top + DemoSimConstants.SCREEN_VIEW_Y_MARGIN,
      }),
    );

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    const resetAllButton = new ResetAllButton({
      listener: () => {
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - DemoSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - DemoSimConstants.SCREEN_VIEW_Y_MARGIN,
    });
    this.addChild(resetAllButton);
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    // Nothing needed for example-sim.
  }
}
