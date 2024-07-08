/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { DropdownProps } from './Dropdown.types';
import { base, variants, icon } from './Dropdown.styles';
import { DropdownItem } from './DropdownItem';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

export const Dropdown = ({
  children,
  size = 'md',
  color = 'primary',
  variant = 'outlined',
  ...props
}: DropdownProps) => {
  const theme = useTheme();

  return (
    <select
      css={[base(theme, size), variants[variant](theme, theme.colors[color])]}
      {...props}
    >
      <Arrow css={icon} />
      {children}
    </select>
  );
};

Dropdown.Item = DropdownItem;
