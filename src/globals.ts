import { splash_svg } from 'scenerystack/adapted-from-phet';

window.phet = window.phet || {};
window.phet.chipper = window.phet.chipper || {};
window.phet.chipper.project = 'demo-sim';
window.phet.chipper.version = '1.0.0';
window.phet.chipper.buildTimestamp = '' + Date.now();
window.phet.chipper.brand = 'adapted-from-phet';
window.phet.chipper.locale = 'en';
window.phet.chipper.isDebugBuild = false;
window.phet.chipper.allowLocaleSwitching = true;
window.phet.chipper.packageObject = {
  name: phet.chipper.project,
  version: phet.chipper.version,
  buildTimestamp: phet.chipper.buildTimestamp
  // TODO
};

window.PHET_SPLASH_DATA_URI = splash_svg.src;
