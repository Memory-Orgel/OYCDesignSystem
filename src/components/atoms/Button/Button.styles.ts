import { SerializedStyles, Theme, css } from '@emotion/react';
import { PaletteColor } from '../../../themes/lightTheme';
import { Size } from '../../../themes/themeBase';
import { ButtonVariant } from './Button.types';

export const base = (theme: Theme, size: Size) => css`
  padding: calc(${theme.spacing[size]} / 1.375) ${theme.spacing[size]};
  box-sizing: border-box;
  border: 0;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize[size]};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
`;

export const variants: Record<ButtonVariant, (theme: Theme, palette: PaletteColor) => SerializedStyles> = {
  contained: (theme: Theme, palette: PaletteColor) => css`
    background-color: ${palette.main};
    color: ${palette.contrastText};
  `,
  outlined: (theme: Theme, palette: PaletteColor) => css`
    border: 1px solid ${palette.main};
    background-color: ${theme.colors.background};
    color: ${palette.main};
  `,
};
