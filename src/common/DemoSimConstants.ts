// Copyright 2021-2024, University of Colorado Boulder

/**
 * DemoSimConstants is a collection of constants that are used throughout this simulation.
 * If a constant is used in more than one place in the code, it is preferable to put that constant here,
 * rather than duplicating it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { DemoSimColors } from "./DemoSimColors.js";

export const DemoSimConstants = {
  // Margins around the edge of the view
  SCREEN_VIEW_X_MARGIN: 20,
  SCREEN_VIEW_Y_MARGIN: 20,

  // Options common to all Screens
  SCREEN_OPTIONS: {
    backgroundColorProperty: DemoSimColors.screenBackgroundColorProperty,

    // put a gray border around unselected icons on the home screen
    showUnselectedHomeScreenIconFrame: true,

    // put a gray border around screen icons when the navigation bar is black
    showScreenIconFrameForNavigationBarFill: "black",
  },
};
