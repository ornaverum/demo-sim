// init should always be at the top. It needs to run before other scenerystack code loads.
import './init.ts';
// splash and brand should be included also before other imports below
import 'scenerystack/splash';
import './brand.ts';

import { onReadyToLaunch, Sim, SimOptions } from 'scenerystack/sim';
import { DemoSimStrings } from './DemoSimStrings.js';
import { MagnetsScreen } from './magnets/MagnetsScreen.js';
import { ParticlesScreen } from './particles/ParticlesScreen.js';

onReadyToLaunch( () => {
  const titleStringProperty = DemoSimStrings.titleStringProperty;

  const screens = [
    new MagnetsScreen(),
    new ParticlesScreen()
  ];

  const options: SimOptions = {

    // These credits will appear in the About dialog, accessed from the PhET menu in the navigation bar.
    // All credits fields are optional, see joist.AboutDialog.
    credits: {
      leadDesign: 'Boris',
      softwareDevelopment: 'Natasha',
      team: 'Chico, Groucho, Gummo, Harpo, Zeppo',
      contributors: 'Betty, Veronica',
      qualityAssurance: 'Curly, Larry, Moe',
      graphicArts: 'Dali, Picasso, Warhol',
      soundDesign: 'Bach, Mozart',
      thanks: 'Thanks to the ACME Dynamite Company for funding this sim!'
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );
