// Copyright 2025, University of Colorado Boulder

/**
 * Translatable Fluent messages for the simulation.
 */

import { getFluentModule } from "scenerystack/chipper";
import en_messages from "./strings/demo-sim-strings_en.ftl";
import es_messages from "./strings/demo-sim-strings_es.ftl";
import fa_DA_messages from "./strings/demo-sim-strings_fa_DA.ftl";
import hi_messages from "./strings/demo-sim-strings_hi.ftl";

export const DemoSimMessages = getFluentModule( {
  en: en_messages,
  es: es_messages,
  fa_DA: fa_DA_messages,
  hi: hi_messages
} );