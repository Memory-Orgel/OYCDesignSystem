import { Theme, css } from '@emotion/react';
import { PaletteColor } from '../../../themes/lightTheme';

export const base = (theme: Theme, palette: PaletteColor) => css`
  position: relative;
  padding: 0.125rem 0;
  border-radius: 1rem;
  width: 2.125rem;
  height: 1rem;
  background-color: ${palette.main};
  transition: background-color 300ms;
`;

export const thumb = (value: boolean) => css`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  left: ${value ? '0.125rem' : '1rem'};
  transition: left 300ms ease-in-out;
`;
