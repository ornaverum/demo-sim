// Copyright 2013-2024, University of Colorado Boulder

/**
 * MagnetsScreen is the top-level component for the 'Magnets' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { EmptySelfOptions, optionize4 } from "scenerystack/phet-core";
import { Image } from "scenerystack/scenery";
import barMagnet_png from "../images/barMagnet_png.js";
import { Screen, ScreenIcon, ScreenOptions } from "scenerystack/sim";
import { MagnetsModel } from "./model/MagnetsModel";
import { MagnetsScreenView } from "./view/MagnetsScreenView";
import { DemoSimConstants } from "../common/DemoSimConstants";
import { DemoSimStrings } from "../DemoSimStrings";
import { Tandem } from "scenerystack/tandem";
import { DemoSimColors } from "../common/DemoSimColors";

type SelfOptions = EmptySelfOptions;

type MagnetsScreenOptions = SelfOptions & ScreenOptions;

export class MagnetsScreen extends Screen<MagnetsModel, MagnetsScreenView> {
  public constructor(providedOptions?: MagnetsScreenOptions) {
    const options = optionize4<
      MagnetsScreenOptions,
      SelfOptions,
      ScreenOptions
    >()(
      {},
      DemoSimConstants.SCREEN_OPTIONS,
      {
        name: DemoSimStrings.screen.magnetsStringProperty,
        homeScreenIcon: createScreenIcon(),
        tandem: Tandem.OPT_OUT,
      },
      providedOptions,
    );

    super(
      () => new MagnetsModel(),
      (model) => new MagnetsScreenView(model),
      options,
    );
  }
}

/**
 * Creates the icon for this screen. This will be used for the home screen and navigation bar.
 * Always use ScreenIcon for screen icons.
 */
function createScreenIcon(): ScreenIcon {
  const iconNode = new Image(barMagnet_png);
  return new ScreenIcon(iconNode, {
    fill: DemoSimColors.screenBackgroundColorProperty,
  });
}
