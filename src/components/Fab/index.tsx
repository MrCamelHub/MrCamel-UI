import React, { forwardRef, ButtonHTMLAttributes } from 'react';

import { GenericComponentProps } from '../../types';
import { StyledFab, StyledFabInner } from './Fab.styles';

export interface FabProps extends GenericComponentProps<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { children, customStyle, ...props },
  ref
) {
  return (
    <StyledFab ref={ref} css={customStyle} {...props}>
      <StyledFabInner>{children}</StyledFabInner>
    </StyledFab>
  );
});

export default Fab;
