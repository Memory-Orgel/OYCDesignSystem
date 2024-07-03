import colorPalette from './colorPalette';
import ThemeBase, { ThemeBaseType } from './themeBase';

const LightTheme: ThemeType = {
  ...ThemeBase,
  colors: {
    primary: {
      main: colorPalette.blue.A400,
      contrastText: '#fff',
    },
    secondary: {
      main: colorPalette.blueGrey.A700,
      contrastText: '#fff',
    },
    background: '#fff',
    text: '#000',
  },
};

export default LightTheme;

export type Palette = 'primary' | 'secondary';
export type PaletteColor = { [key in 'main' | 'contrastText']: string };
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
