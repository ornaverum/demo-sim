// Copyright 2024, University of Colorado Boulder

/**
 * Translatable strings for the simulation.
 */

import { LocalizedString } from "scenerystack/chipper";
import en_strings from "./strings/demo-sim-strings_en.json";
import es_strings from "./strings/demo-sim-strings_es.json";
import fa_DA_strings from "./strings/demo-sim-strings_fa_DA.json";
import hi_strings from "./strings/demo-sim-strings_hi.json";

export const DemoSimStrings = LocalizedString.getNestedStringProperties( {
  en: en_strings,
  es: es_strings,
  fa_DA: fa_DA_strings,
  hi: hi_strings
} );