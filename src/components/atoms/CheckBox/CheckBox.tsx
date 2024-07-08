/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { CheckBoxProps } from './CheckBox.types';
import { base } from './CheckBox.styles';

export const CheckBox = ({
  color = 'primary',
  variant = 'outlined',
  size = 'md',

  ...props
}: CheckBoxProps) => {
  const theme = useTheme();

  return (
    <>
      <input
        type="checkbox"
        id="myCheckbox"
        css={base(theme, size)}
        {...props}
      />
      {/* <label htmlFor="myCheckbox">체크박스</label> */}
    </>
  );
};
