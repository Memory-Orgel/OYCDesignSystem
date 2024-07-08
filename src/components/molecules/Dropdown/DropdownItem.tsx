/** @jsxImportSource @emotion/react */
import React from 'react';

export const DropdownItem = ({
  children,
  ...props
}: React.ComponentProps<'option'>) => {
  return <option {...props}>{children}</option>;
};
