import { ScreenView, ScreenViewOptions } from "scenerystack/sim";
import { DemoSimModel } from '../model/DemoSimModel.js';
import { ResetAllButton } from "scenerystack/scenery-phet";

export class DemoSimScreenView extends ScreenView {
  public constructor( model: DemoSimModel, options?: ScreenViewOptions ) {
    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput();
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  public reset(): void {
    // Called when the user presses the reset-all button
  }

  public step( _dt: number ): void {
    // Called every frame, with the time since the last frame in seconds
  }
}