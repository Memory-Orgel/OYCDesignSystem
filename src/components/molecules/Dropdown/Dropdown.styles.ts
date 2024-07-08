import { SerializedStyles, Theme, css } from '@emotion/react';
import { PaletteColor } from '../../../themes/lightTheme';
import { Size } from '../../../themes/themeBase';
import { DropdownVariant } from './Dropdown.types';

export const base = (theme: Theme, size: Size) => css`
  position: relative;
  padding: calc(${theme.spacing[size]} / 1.375)
    calc(${theme.spacing[size]} + 1.5rem) calc(${theme.spacing[size]} / 1.375)
    ${theme.spacing[size]};
  box-sizing: border-box;
  border: 0;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize[size]};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all 100ms ease;
  user-select: none;
  outline: none;
  appearance: unset;

  :enabled {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }
`;

export const icon = () => css`
  position: absolute;
  fill: red;
`;

export const variants: Record<
  DropdownVariant,
  (theme: Theme, palette: PaletteColor) => SerializedStyles
> = {
  contained: (theme: Theme, palette: PaletteColor) => css`
    background-color: ${palette.main};
    color: ${palette.contrastText};

    :enabled {
      :hover {
        background-color: ${palette.hover};
      }

      :active {
        background-color: ${palette.active};
      }
    }

    :disabled {
      background-color: ${palette.disabled};
    }
  `,
  outlined: (theme: Theme, palette: PaletteColor) => css`
    border: 1px solid ${palette.main};
    background-color: ${theme.colors.background};
    color: ${palette.main};

    :disabled {
      border: 1px solid ${palette.disabled};
      color: ${palette.disabled};
    }
  `,
};
