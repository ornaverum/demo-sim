// Copyright 2024, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author Franz Amador
 */

import { logGlobal } from "scenerystack/phet-core";
import QueryStringMachine from "scenerystack/query-string-machine";

const SCHEMA_MAP = {
  // None needed for example-sim?
};

export const DemoSimQueryParameters = QueryStringMachine.getAll(SCHEMA_MAP);

// The schema map is a read-only part of the public API, in case schema details (e.g. validValues) are needed elsewhere.
DemoSimQueryParameters.SCHEMA_MAP = SCHEMA_MAP;

// Log query parameters
logGlobal("phet.chipper.queryParameters");
logGlobal("phet.preloads.phetio.queryParameters");
logGlobal("phet.demoSim.DemoSimQueryParameters");
