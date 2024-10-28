export const typesToast = {
  solid: 'solid',
  soft: 'soft'
} as const;

export type TypesToast = keyof typeof typesToast;

export const ColorsToast = {
  dark: 'dark',
  gray: 'gray',
  green: 'green',
  orange: 'orange',
  red: 'red',
  warning: 'warning',
  light: 'light',
} as const;

export type ColorToast = keyof typeof ColorsToast;


export const ShapesToast = {
  rounded: 'rounded',
  pilled: 'pilled',
} as const;

export type ShapeToast = keyof typeof ShapesToast;


export type ToastPosition =
  'top-left' |
  'top-right' |
  'bottom-left' |
  'bottom-right';


export const StatusCodesValid =
  200 | 201 | 202 | 204 | 206 |
  400 | 401 | 403 | 404 | 405 |
  500 | 501 | 503;

export type StatusCodeValid = typeof StatusCodesValid;
