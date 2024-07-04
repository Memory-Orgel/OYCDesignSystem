import colorPalette from './colorPalette';
import ThemeBase, { ThemeBaseType } from './themeBase';

const LightTheme: ThemeType = {
  ...ThemeBase,
  colors: {
    primary: {
      main: colorPalette.blue.A400,
      contrastText: '#fff',
      hover: colorPalette.blue.A200,
      active: colorPalette.blue.A700,
      disabled: colorPalette.blue.A100,
    },
    secondary: {
      main: colorPalette.blueGrey.A700,
      contrastText: '#fff',
      hover: colorPalette.blueGrey['500'],
      active: colorPalette.blueGrey['800'],
      disabled: colorPalette.blueGrey.A200,
    },
    background: '#fff',
    text: '#000',
  },
};

export default LightTheme;

export type Palette = 'primary' | 'secondary';
export type PaletteColor = { [key in 'main' | 'contrastText' | 'hover' | 'active' | 'disabled']: string };
export interface ThemeType extends ThemeBaseType {
  colors: {
    background: string;
    text: string;
  } & {
    [key in Palette]: PaletteColor;
  };
}

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
