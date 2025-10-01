// Copyright 2013-2024, University of Colorado Boulder

import { EmptySelfOptions, optionize } from "scenerystack/phet-core";
import { Checkbox, CheckboxOptions, Panel, PanelOptions, RectangularPushButton } from "scenerystack/sun";
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
type MagnetsControlPanelOptions = SelfOptions & PanelOptions;

export class MagnetsControlPanel extends Panel {
  /**
   * model - the model for the entire screen
   * providedOptions - options for the control panel, see Panel.js for options
   */
  public constructor(
    model: MagnetsBallModel,
    providedOptions: MagnetsControlPanelOptions,
  ) {
    // Demonstrate a common pattern for specifying options and providing default values
    const options = optionize<
      MagnetsControlPanelOptions,
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

    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text(
      DemoSimStrings.magnetControlsStringProperty,
      {
        font: new PhetFont({
          size: 18,
          weight: "bold",
        }),
      },
    );

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton({
      content: new Text(DemoSimStrings.flipPolarityStringProperty, {
        font: new PhetFont(16),
      }),
      baseColor: DemoSimColors.controlPanelButtonColorProperty,
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnets[0]?.orientationProperty.get() + Math.PI;
        model.barMagnets[0]?.orientationProperty.set(orientation);
      },
    });

    // Toggle Ball Visibility checkbox
    const toggleBallVisibilityCheckbox = new Checkbox(
      model.ball.visibleProperty,
      new Text('Show Ball', { font: new PhetFont(16) })
   );

    // The contents of the control panel
    const content = new VBox({
      align: "center",
      spacing: 10,
      children: [magnetControlsTitleNode, flipPolarityButton, toggleBallVisibilityCheckbox],
    });

    super(content, options);
  }
}
