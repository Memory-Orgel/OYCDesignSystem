import { Theme, css } from '@emotion/react';
import { Size } from '../../../themes/themeBase';

export const base = (theme: Theme, size: Size, error: boolean) => css`
  border: 0.0875rem solid
    ${error ? theme.colors.danger.main : theme.colors.secondary.main};
  width: 100%;
  border-radius: ${theme.borderRadius[size]};
  padding: ${theme.spacing[size]};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSize[size]};
  transition: all 100ms ease;
  outline: none;

  ${!error &&
  css`
    :focus {
      border: 0.0875rem solid ${theme.colors.primary.main};
    }
  `}
`;
