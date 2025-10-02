// Copyright 2013-2024, University of Colorado Boulder

import { EmptySelfOptions, optionize } from "scenerystack/phet-core";
import { Checkbox, HSlider, Panel, PanelOptions, RectangularPushButton } from "scenerystack/sun";
import { Range } from "scenerystack/dot";
import { MagnetsBallModel } from "../model/MagnetsBallModel.js";
import { DemoSimColors } from "../../common/DemoSimColors.js";
import { DemoSimStrings } from "../../DemoSimStrings.js";
import { Text, VBox } from "scenerystack/scenery";
import { PhetFont } from "scenerystack/scenery-phet";

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

type SelfOptions = EmptySelfOptions;
type BallControlPanelOptions = SelfOptions & PanelOptions;

export class BallControlPanel extends Panel {
  /**
   * model - the model for the entire screen
   * providedOptions - options for the control panel, see Panel.js for options
   */
  public constructor(
    model: MagnetsBallModel,
    providedOptions: BallControlPanelOptions,
  ) {
    // Demonstrate a common pattern for specifying options and providing default values
    const options = optionize<
      BallControlPanelOptions,
      SelfOptions,
      PanelOptions
    >()(
      {
        // Default values for optional PanelOptions
        xMargin: 10,
        yMargin: 10,
        stroke: DemoSimColors.controlPanelBorderColorProperty,
        lineWidth: 3,
      },
      providedOptions,
    );


    // Toggle Ball Visibility checkbox
    const toggleBallVisibilityCheckbox = new Checkbox(
      model.ball.visibleProperty,
      new Text('Show Ball', { font: new PhetFont(16) })
   );

   // HSlider to control ball diameter
     const ballDiameterSlider = new HSlider(model.ball.diameterProperty, 
      new Range(50, 400)
    );
    // The contents of the control panel
    const content = new VBox({
      align: "center",
      spacing: 10,
      children: [toggleBallVisibilityCheckbox, ballDiameterSlider],
    });

    super(content, options);
  }
}
