import './globals.js';
import './brand.js';
import 'scenerystack/splash';
import { asyncLoader } from "scenerystack/phet-core";
import { Screen, ScreenOptions, ScreenView, ScreenViewOptions, Sim, SimOptions } from "scenerystack/sim";
import { ResetAllButton } from "scenerystack/scenery-phet";
import { StringProperty } from 'scenerystack/axon';
import { Tandem } from 'scenerystack/tandem';

// Signify that the simLauncher was called, see https://github.com/phetsims/joist/issues/142
window.phet.joist = window.phet.joist || {};
window.phet.joist.launchCalled = true;

window.phet.chipper.allowLocaleSwitching = true;

console.log( 'tests' );

class DemoSimModel {
  public reset(): void {

  }
  public step( dt: number ): void {

  }
}

class DemoSimScreenView extends ScreenView {
  public constructor( model: DemoSimModel, options?: ScreenViewOptions ) {
    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
      // tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  public reset(): void {

  }

  public step( dt: number ): void {

  }
}

class DemoSimScreen extends Screen<DemoSimModel, DemoSimScreenView> {
  public constructor( options: ScreenOptions ) {
    super(
      () => new DemoSimModel(),
      model => new DemoSimScreenView( model ),
      options
    );
  }
}

const unlockLaunch = asyncLoader.createLock( { name: 'launch' } );

// Add listener before unlocking the launch lock
asyncLoader.addListener( () => {

  const titleStringProperty = new StringProperty( 'Demo Simulation' );

  const screens = [
    new DemoSimScreen( { tandem: Tandem.ROOT.createTandem( 'simulaRasaScreen' ) } )
  ];

  const options: SimOptions = {

    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();


} );
unlockLaunch();


  // window.phet = window.phet || {};
  // window.phet.chipper = window.phet.chipper || {};
  // window.phet.chipper.packageObject =
  //   {
  //     "name": "demo-sim",
  //     "version": "0.0.1",
  //     "license": "MIT",
  //     "repository": {
  //       "type": "git",
  //       "url": "https://github.com/scenerystack/demo-sim.git"
  //     },
  //     "devDependencies": {
  //       "grunt": "~1.5.3"
  //     },
  //     "phet": {
  //       "requirejsNamespace": "DEMO_SIM",
  //       "runnable": true,
  //       "supportedBrands": [
  //         "phet",
  //         "phet-io",
  //         "adapted-from-phet"
  //       ],
  //       "simulation": true,
  //       "supportsOutputJS": true,
  //       "simFeatures": {
  //         "supportsSound": true,
  //         "supportsInteractiveDescription": true,
  //         "supportsDynamicLocale": true,
  //         "colorProfiles": [
  //           "default"
  //         ]
  //       },
  //       "published": true,
  //       "screenNameKeys": [
  //         "DEMO_SIM/screen.one",
  //         "DEMO_SIM/screen.two"
  //       ]
  //     }
  //   };
  // window.phet.chipper.allowLocaleSwitching = true;

  // TODO: load-unbuilt-strings!!
// TODO: simLauncher mostly calls window.phet.joist.launchSimulation();, within a asyncLoader.addListener( () => { ... } ) .. first lock, then release lock