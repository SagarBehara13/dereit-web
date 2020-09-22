import theme from '@rebass/preset';
import { defaultRebootTheme } from 'styled-reboot';

export const colors = {
  text: '#000e1a',
  black: '#121212',
  gray: '#9B9B9B',
  white: '#ffffff',
  blue: '#3426F1',
  navy: '#004175',
  purple: '#3426F1',
  lightGray: '#f7f7f7',
}

export const breakpoints = [
  `576px`, `768px`, `992px`, `1200px`, `1441px`, `1600px`
]

export const space = [
  0, 4, 8, 16, 32, 64, 128, 256
]

export const fonts = {
  sans: 'Karla, sans-serif',
  serif: 'GT Super Display, Georgia, serif',
  serifText: 'GT Super Text, GT Super Display, Georgia, serif',
  headings: 'Rubik, sans-serif',
  body: "system-ui, sans-serif",
  heading: "inherit",
  monospace: "Menlo, monospace",
}

export const fontSizes = [
  16,
  18,
  20,
  24,
  28,
  42,
  48,
]

export const header = {
  height: 105,
}

export const rebootCSS = {
  ...defaultRebootTheme,
  fontFamilyBase: fonts.sans,
  fontFamilyMonospace: fonts.mono,
  fontFamilySerif: fonts.serif,
  fontWeightBase: 400,
  linkColor: colors.blue
};

export default {
  ...theme,
  ...rebootCSS,
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  header
}
