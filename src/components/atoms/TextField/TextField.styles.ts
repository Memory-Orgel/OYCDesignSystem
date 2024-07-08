import { Theme, css } from '@emotion/react';
import { Size } from '../../../themes/themeBase';

export const base = (theme: Theme, size: Size) => css`
  border: ${theme.border[size]} solid ${theme.colors.secondary.main};
  width: 100%;
  border-radius: ${theme.spacing[size]};
  padding: ${theme.spacing[size]};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSize[size]};
  transition: all 100ms ease;
  outline: none;

  :focus {
    border: ${theme.border[size]} solid ${theme.colors.primary.main};
  }
`;
