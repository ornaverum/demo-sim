import type { TBrand } from "scenerystack/brand";

( async () => {
  const initModule = ( await import( "scenerystack/init" ) );
  const init = initModule.init;
  const madeWithSceneryStackSplashDataURI = initModule.madeWithSceneryStackSplashDataURI;

  // Initialize values that will be used at import-time by other modules.
  init({
    // Internal name of the simulation.
    name: "demo-sim",

    // Version (will be shown in the About dialog)
    version: "1.0.0",

    // The brand name used (should be the same as in brand.ts)
    brand: "made-with-scenerystack",

    // Should be one of the keys from https://github.com/phetsims/babel/blob/main/localeData.json
    // Can be omitted, will default to 'en'
    locale: "en",

    // List of locales that are supported (and can be switched between in the simulation while running)
    availableLocales: ["en", "es", "fa_DA", "hi"],

    // Image to show while loading the simulation. Can be any image URL.
    splashDataURI: madeWithSceneryStackSplashDataURI,

    allowLocaleSwitching: true,
  });

  // Enable assertions (done early so other failures are detected).
  ( await import( "scenerystack/assert" ) ).enableAssert();

  // Load the splash screen, which will be shown while the sim is loading.
  await import( "scenerystack/splash" );

  // Initialize branding information
  {
    const brandModule = ( await import( "scenerystack/brand" ) );
    const brand = brandModule.brand;
    const madeWithSceneryStackOnLight = brandModule.madeWithSceneryStackOnLight;
    const madeWithSceneryStackOnDark = brandModule.madeWithSceneryStackOnDark;

    const Brand: TBrand = {
      // Nickname for the brand, which should match the brand subdirectory name, grunt option for --brand as well as the
      // query parameter for ?brand.  This is used in Joist to provide brand-specific logic, such as what to show in the
      // About dialog, decorative text around the PhET button, and whether to check for updates.
      id: "made-with-scenerystack",

      // Optional string for the name of the brand.  If non-null, the brand name will appear in the top of the About dialog
      // {string} For example: "My Company"
      name: null,

      // Optional string for the copyright statement.  If non-null, it will appear in the About dialog
      // {string} For example: "Copyright © 2014, My Company"
      copyright: null,

      /**
       * Return any links to appear in the About dialog.  The sim name and locale can be used for customization if desired.
       * For example: { textStringProperty: new Property( "My Company Support" ), url: "https://www.mycompany.com/support" }
       */
      getLinks: function () {
        return [];
      },
      logoOnBlackBackground: madeWithSceneryStackOnDark,
      logoOnWhiteBackground: madeWithSceneryStackOnLight,
    };

    brand.register("Brand", Brand);
  }

  // Load the main content.
  await import( './main.ts' );
} )();