// Copyright 2024, University of Colorado Boulder

/**
 * Translatable strings for the simulation.
 */

import { Tandem } from 'scenerystack/tandem';
import { LocalizedString, LocalizedStringProperty, LocalizedStringStateDelta } from 'scenerystack/chipper';

const createString = ( key: string, data: LocalizedStringStateDelta ) => {
  return new LocalizedStringProperty( new LocalizedString( key, data, Tandem.OPT_OUT ), Tandem.OPT_OUT );
};

export const DemoSimStrings = {
  titleStringProperty: createString( 'titleString', {
    en: 'Demo Simulation',
    es: 'Demo Simulación',
    fa_DA: 'شبیه‌سازی نمونه',
    hi: 'डेमो सिमुलेशन'
  } ),
  screen: {
    magnetsStringProperty: createString( 'magnetsString', {
      en: 'Magnets',
      es: 'Imanes',
      fa_DA: 'آهنرباها',
      hi: 'चुंबक'
    } ),
    particlesStringProperty: createString( 'particlesString', {
      en: 'Particles',
      es: 'Partículas',
      fa_DA: 'ذرات',
      hi: 'कण'
    } ),
  },
  magnetControlsStringProperty: createString( 'magnetControlsString', {
    en: 'Magnet Controls',
    es: 'Controles del Imán',
    fa_DA: 'کنترل‌های آهنربا',
    hi: 'चुंबक नियंत्रण'
  } ),
  flipPolarityStringProperty: createString( 'flipPolarityString', {
    en: 'Flip Polarity',
    es: 'Invertir Polaridad',
    fa_DA: 'تغییر قطب',
    hi: 'धराएँ उल्टाएँ'
  } )
};