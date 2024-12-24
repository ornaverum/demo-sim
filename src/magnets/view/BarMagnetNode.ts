// Copyright 2013-2024, University of Colorado Boulder

/**
 * BarMagnetNode is the view for the bar magnet. It is responsible for the visual representation of a bar magnet,
 * and keeping that visual representation synchronized with a BarMagnet instance.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import barMagnetURL from "../../images/barMagnet_png.js";
import { Node, Image, DragListener } from "scenerystack/scenery";
import { BarMagnet } from "../model/BarMagnet";
import { ModelViewTransform2 } from "scenerystack/phetcommon";

export class BarMagnetNode extends Node {
  /**
   * barMagnet - the model of the bar magnet
   * modelViewTransform - the transform between model coordinates and view coordinates
   */
  public constructor(
    barMagnet: BarMagnet,
    modelViewTransform: ModelViewTransform2,
  ) {
    super({
      // Show a cursor hand over the bar magnet
      cursor: "pointer",
    });

    // The bar magnet is rendered using an image file. This creates the scenery Node that will render that image
    // file, and moves the origin (0,0) to the center of the Node.
    this.addChild(
      new Image(barMagnetURL, {
        centerX: 0,
        centerY: 0,
      }),
    );

    // Scale this Node, so that it matches the model width and height.
    const scaleX =
      modelViewTransform.modelToViewDeltaX(barMagnet.size.width) / this.width;
    const scaleY =
      modelViewTransform.modelToViewDeltaY(barMagnet.size.height) / this.height;
    this.scale(scaleX, scaleY);

    // Move the magnet by dragging it.
    this.addInputListener(
      new DragListener({
        allowTouchSnag: true, // When dragging across it on a touch device, pick it up
        positionProperty: barMagnet.positionProperty,
        transform: modelViewTransform,
      }),
    );

    // Observe changes in model position, and move this Node to the new position in the view.
    // This Property exists for the lifetime of the simulation, so this listener does not need to be unlinked.
    barMagnet.positionProperty.link((position) => {
      this.translation = modelViewTransform.modelToViewPosition(position);
    });

    // Observe changes in model orientation, and update the orientation in the view.
    // This Property exists for the lifetime of the simulation, so this listener does not need to be unlinked.
    barMagnet.orientationProperty.link((orientation) => {
      this.rotation = orientation;
    });
  }
}
