// Copyright 2021-2024, University of Colorado Boulder

import { ScreenView } from "scenerystack/sim";
import { ParticlesModel } from "../model/ParticlesModel";
import { Vector2 } from "scenerystack/dot";
import { ModelViewTransform2 } from "scenerystack/phetcommon";
import { Node } from "scenerystack/scenery";
import { ResetAllButton, TimeControlNode } from "scenerystack/scenery-phet";
import { DemoSimConstants } from '../../common/DemoSimConstants.js';
import { ParticleNode } from './ParticleNode.js';

/**
 * ParticlesScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

// The model is in nanometers, and this is the number of nanometers per 1 unit in the view.
const NANOMETERS_PER_PIXEL = 100;

export class ParticlesScreenView extends ScreenView {

  /**
   * model - the top-level model for this screen
   */
  public constructor( protected readonly model: ParticlesModel ) {

    super();

    // Transform from model coordinates to view coordinates. The model's origin is at the position where the
    // particles originate. Move that position to the top center of the screen.  Since the model is in nm,
    // scale up from model to view. And since +y is up in the model, the y scale is negative because +y is
    // down in the view (scenery).
    const viewOffset = new Vector2( this.layoutBounds.centerX, 20 );
    const modelViewTransform = ModelViewTransform2.createOffsetXYScaleMapping( viewOffset,
      1 / NANOMETERS_PER_PIXEL, -1 / NANOMETERS_PER_PIXEL );

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        // Reset the model
        model.reset();
      },
      right: this.layoutBounds.right - DemoSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.bottom - DemoSimConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( resetAllButton );

    // Time controls, used to play/pause the animation
    const timeControlNode = new TimeControlNode( model.isPlayingProperty, {
      playPauseStepButtonOptions: {
        stepForwardButtonOptions: {
          listener: () => model.stepOnce()
        }
      },
      right: resetAllButton.left - 40,
      bottom: this.layoutBounds.bottom - DemoSimConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( timeControlNode );

    // The parent for all ParticleNode instances. Grouping them here ensures that we're only looking at
    // ParticleNode instances when trying to identify which ParticleNode corresponds to a specific Particle.
    const particlesNode = new Node();
    this.addChild( particlesNode );

    // When a Particle is added to the model, add a corresponding ParticleNode to the view.
    // removeListener is not needed, because model exists for the lifetime of the sim.
    model.particleAddedEmitter.addListener( particle => {
      particlesNode.addChild( new ParticleNode( particle, modelViewTransform ) );
    } );

    // When a Particle is removed from the model, remove its corresponding ParticleNode from the view.
    // removeListener is not needed, because model exists for the lifetime of the sim.
    model.particleRemovedEmitter.addListener( particle => {
      particlesNode.children.forEach( particleNode => {
        if ( ( particleNode as ParticleNode ).particle === particle ) {
          particleNode.dispose(); // this also removes particleNode from particlesNode
        }
      } );
    } );
  }
}