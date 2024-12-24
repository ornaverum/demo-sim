// Copyright 2013-2024, University of Colorado Boulder

import { TModel } from "scenerystack/joist";
import { BarMagnet } from "./BarMagnet.js";
import { Dimension2, Vector2 } from "scenerystack/dot";

/**
 * MagnetsModel is the top-level model for the 'Magnets' screen. You can think of the top-level model as a container
 * for all of the pieces that make up the model for a screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

export class MagnetsModel implements TModel {
  // initial bar magnet model element
  public readonly barMagnet: BarMagnet;

  public constructor() {
    this.barMagnet = new BarMagnet(
      new Dimension2(250, 50),
      new Vector2(0, 0),
      0,
    );
  }

  /**
   * Restores the initial state of all model elements.
   * This method is called when the simulation's "Reset All" button is pressed.
   */
  public reset(): void {
    this.barMagnet.reset();
  }
}
