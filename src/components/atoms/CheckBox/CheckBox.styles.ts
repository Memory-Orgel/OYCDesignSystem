import { Theme, css } from '@emotion/react';
import { Size } from '../../../themes/themeBase';

export const base = (theme: Theme, size: Size) => css`
  width: 2rem;
  height: 2rem;
  /* :not(:checked) {
    width: 2rem;
    height: 2rem;
  } */
  cursor: pointer;
  :checked {
    accent-color: ${theme.colors.primary.main};
  }
`;

