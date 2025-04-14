// NOTE: brand.js needs to be the first import. This is because SceneryStack for sims needs a very specific loading
// order: init.ts => assert.ts => splash.ts => brand.ts => everything else (here)
import "./brand.js";

import { onReadyToLaunch, Sim, SimOptions } from "scenerystack/sim";
import { DemoSimStrings } from "./DemoSimStrings.js";
import { MagnetsScreen } from "./magnets/MagnetsScreen.js";
import { ParticlesScreen } from "./particles/ParticlesScreen.js";

onReadyToLaunch(() => {
  const titleStringProperty = DemoSimStrings.titleStringProperty;

  const screens = [new MagnetsScreen(), new ParticlesScreen()];

  const options: SimOptions = {
    // These credits will appear in the About dialog, accessed from the PhET menu in the navigation bar.
    // All credits fields are optional, see joist.AboutDialog.
    credits: {
      leadDesign: "Boris",
      softwareDevelopment: "Natasha",
      team: "Chico, Groucho, Gummo, Harpo, Zeppo",
      contributors: "Betty, Veronica",
      qualityAssurance: "Curly, Larry, Moe",
      graphicArts: "Dali, Picasso, Warhol",
      soundDesign: "Bach, Mozart",
      thanks: "Thanks to the ACME Dynamite Company for funding this sim!",
    },
  };

  const sim = new Sim(titleStringProperty, screens, options);
  sim.start();
});