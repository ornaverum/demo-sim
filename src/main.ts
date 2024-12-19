// init should always be at the top. It needs to run before other scenerystack code loads.
import './init.ts';
// splash and brand should be included also before other imports below
import 'scenerystack/splash';
import './brand.ts';

import { onReadyToLaunch, Sim } from 'scenerystack/sim';
import { StringProperty } from 'scenerystack/axon';
import { Tandem } from 'scenerystack/tandem';
import { DemoSimScreen } from './demo-screen/DemoSimScreen.js';

onReadyToLaunch( () => {
  // The title, like most string-like things, is a StringProperty that can change to different values (e.g. for
  // different languages, see localeProperty from scenerystack/joist)
  const titleStringProperty = new StringProperty( 'Demo Simulation' );

  const screens = [
    new DemoSimScreen( { tandem: Tandem.ROOT.createTandem( 'demoSimScreen' ) } )
  ];

  const sim = new Sim( titleStringProperty, screens );
  sim.start();
} );
