import React, { forwardRef } from 'react';
import type { ImgHTMLAttributes } from 'react';

import { StyledAvatar } from './Avatar.styles';
import type { BoxRoundKey, GenericComponentProps } from '../../types';

export interface AvatarProps extends GenericComponentProps<ImgHTMLAttributes<HTMLImageElement>> {
  round?: BoxRoundKey;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { width = 24, height = 24, src, alt, customStyle, round = '4', ...props },
  ref
) {
  return (
    <StyledAvatar
      ref={ref}
      width={width}
      height={height}
      src={src}
      alt={alt}
      round={round}
      css={customStyle}
      {...props}
    />
  );
});

export default Avatar;
