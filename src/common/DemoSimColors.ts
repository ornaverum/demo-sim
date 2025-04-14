// Copyright 2024, University of Colorado Boulder

/**
 * Defines the colors for this sim.
 *
 * All simulations should have a Colors.js file, see https://github.com/phetsims/scenery-phet/issues/642.
 *
 * For static colors that are used in more than one place, add them here.
 *
 * For dynamic colors that can be controlled via colorProfileProperty.js, add instances of ProfileColorProperty here,
 * each of which is required to have a default color. Note that dynamic colors can be edited by running the sim from
 * phetmarks using the "Color Edit" mode.
 *
 * @author Franz Amador
 */

import { Namespace } from "scenerystack/phet-core";
import { ProfileColorProperty } from "scenerystack/scenery";

const namespace = new Namespace("demo-sim");

export const DemoSimColors = {
  controlPanelBorderColorProperty: new ProfileColorProperty(
    namespace,
    "controlPanelBorder",
    {
      default: "orange",
    },
  ),

  controlPanelButtonColorProperty: new ProfileColorProperty(
    namespace,
    "controlPanelButton",
    {
      default: "yellow",
    },
  ),

  particleColorProperty: new ProfileColorProperty(namespace, "particle", {
    default: "rgb( 30, 80, 160 )",
  }),

  magnetsScreenBackgroundColorProperty: new ProfileColorProperty(
    namespace,
    "magnetsBackground",
    {
      default: "black",
    },
  ),

  particlesScreenBackgroundColorProperty: new ProfileColorProperty(
    namespace,
    "particlesBackground",
    {
      default: "#eee",
    },
  ),
};
