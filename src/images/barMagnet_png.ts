import { asyncLoader } from "scenerystack/phet-core";
import barMagnet from "./barMagnet.png";

const image = new Image();
const unlock = asyncLoader.createLock(image);
image.onload = unlock;
image.src = barMagnet;
export default image;
