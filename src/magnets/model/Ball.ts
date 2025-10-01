import { Vector2 } from "scenerystack/dot";
import { Property } from "scenerystack/axon";
import { NumberProperty } from "scenerystack/axon";
import { TModel } from "scenerystack/joist";
import { Color } from "scenerystack/scenery";
import { DemoSimColors } from "../../common/DemoSimColors.js";
import { combineOptions } from "scenerystack";


type SelfOptions = {
  diameter?: number; // in nm
  position?: Vector2; // in nm
  color?: Color | string;
  visible?: boolean;
};

export type ParticleOptions = SelfOptions;

export class Ball implements TModel {

    public readonly diameter: number;
    public readonly positionProperty: Property<Vector2>;
    public readonly colorProperty: Property<Color | string>;
    public readonly visibleProperty: Property<boolean> = new Property(true);
    public isDisposed: boolean;

    public constructor(providedOptions?: ParticleOptions){

        const options = combineOptions<ParticleOptions>(
            {
              // Default values for optional SelfOptions
              diameter: 200,
              position: new Vector2(0, 0),
              color: DemoSimColors.particleColorProperty.value,
              visible: true,
            },
            providedOptions,
          );
     
        this.isDisposed = false;
        this.diameter = options.diameter!;
        this.positionProperty = new Property(options.position!);
        this.colorProperty = new Property(options.color!);
        this.visibleProperty = new Property(options.visible!);
    }

    public reset():void{
        this.positionProperty.reset();
        this.colorProperty.reset();
        this.visibleProperty.reset();
        this.isDisposed = true;
    }
}