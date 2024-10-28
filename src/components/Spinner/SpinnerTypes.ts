export const typesSpinner = {
  lineSpinner: 'lineSpinner',
  lineSpinnerNoLabel: 'lineSpinnerNoLabel',
  circularProgress: 'circularProgress',
  circularProgressNoLabel: 'circularProgressNoLabel',
} as const;

export type TypesSpinner = keyof typeof typesSpinner;

export const sizesSpinner = {
  xs: 'xs',
  small: 'small',
  default: 'default',
  large: 'large',
} as const;

export type SizesSpinner = keyof typeof sizesSpinner;

export const variantsSpinner = {
  fullScreen: 'fullScreen',
  container: 'container',
} as const;

export type VariantsSpinner = keyof typeof variantsSpinner;


