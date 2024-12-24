// Copyright 2021-2024, University of Colorado Boulder

import { EmptySelfOptions, optionize4 } from "scenerystack/phet-core";
import { Screen, ScreenIcon, ScreenOptions } from "scenerystack/sim";
import { ParticlesModel } from "./model/ParticlesModel";
import { ParticlesScreenView } from "./view/ParticlesScreenView";
import { DemoSimConstants } from "../common/DemoSimConstants.js";
import { DemoSimStrings } from "../DemoSimStrings.js";
import { Tandem } from "scenerystack/tandem";
import { ShadedSphereNode } from "scenerystack/scenery-phet";
import { DemoSimColors } from "../common/DemoSimColors.js";

/**
 * ParticlesScreen is the top-level component for the 'Particles' screen.  It creates the model and view.
 *
 * This screen was inspired by Alberto, a member of the PhET Google Group. He had written a particle simulation
 * in p5.js, and was interested in how it could be ported to PhET libraries.
 * See https://groups.google.com/g/developing-interactive-simulations-in-html5/c/nrBahpJjAf0
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

type SelfOptions = EmptySelfOptions;

type ParticlesScreenOptions = SelfOptions & ScreenOptions;

export class ParticlesScreen extends Screen<
  ParticlesModel,
  ParticlesScreenView
> {
  public constructor(providedOptions?: ParticlesScreenOptions) {
    const options = optionize4<
      ParticlesScreenOptions,
      SelfOptions,
      ScreenOptions
    >()(
      {},
      DemoSimConstants.SCREEN_OPTIONS,
      {
        name: DemoSimStrings.screen.particlesStringProperty,
        homeScreenIcon: createScreenIcon(),
        tandem: Tandem.OPT_OUT,
      },
      providedOptions,
    );

    super(
      () => new ParticlesModel(),
      (model) => new ParticlesScreenView(model),
      options,
    );
  }
}

/**
 * Creates the icon for this screen. This will be used for the home screen and navigation bar.
 * Always use ScreenIcon for screen icons.
 */
function createScreenIcon(): ScreenIcon {
  const iconNode = new ShadedSphereNode(100, {
    mainColor: DemoSimColors.particleColorProperty,
  });
  return new ScreenIcon(iconNode, {
    fill: DemoSimColors.screenBackgroundColorProperty,
  });
}
