/* eslint-disable */
/* @formatter:off */

import { asyncLoader } from 'scenerystack/phet-core';
// @ts-expect-error -- Vite/Parcel will load the image URL.
import barMagnet from './barMagnet.png';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = barMagnet;
export default image;