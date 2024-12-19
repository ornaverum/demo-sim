import { Screen, ScreenOptions } from 'scenerystack/sim';
import { DemoSimModel } from './model/DemoSimModel.js';
import { DemoSimScreenView } from './view/DemoSimScreenView.js';

export class DemoSimScreen extends Screen<DemoSimModel, DemoSimScreenView> {
  public constructor( options: ScreenOptions ) {
    super(
      () => new DemoSimModel(),
      model => new DemoSimScreenView( model ),
      options
    );
  }
}