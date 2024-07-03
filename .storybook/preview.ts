import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import Theme from '../src/themes/lightTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: Theme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
