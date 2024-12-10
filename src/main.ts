import './init.js';
import 'scenerystack/splash';
import { asyncLoader } from "scenerystack/phet-core";
import { Screen, ScreenOptions, ScreenView, ScreenViewOptions, Sim, SimOptions } from "scenerystack/sim";
import { ResetAllButton } from "scenerystack/scenery-phet";
import { StringProperty } from 'scenerystack/axon';
import { Tandem } from 'scenerystack/tandem';

// Signify that the simLauncher was called, see https://github.com/phetsims/joist/issues/142
window.phet.joist.launchCalled = true;

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
