import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { ButtonProps } from '.';

export const StyledButton = styled.button<
  Pick<ButtonProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 4px;

  ${({ theme, theme: { palette }, variant, brandColor }): CSSObject => {
    let cssObject: CSSObject = {};

    const brandColorCode = getBrandColorCodeByColorName(theme, brandColor);

    switch (variant) {
      case 'ghost': {
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: palette.common.grey['60'],
            '& svg': {
              color: palette.common.grey['60']
            }
          };
        }

        break;
      }
      case 'outlinedGhost': {
        if (brandColor === 'black') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: brandColorCode,
            borderColor: palette.common.grey['80'],
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'primary') {
          cssObject = {
            backgroundColor: palette.primary.highlight,
            color: brandColorCode,
            borderColor: palette.primary.light,
            '& svg': {
              color: brandColorCode
            }
          };
        }

        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: palette.common.grey['60'],
            borderColor: palette.common.grey['80'],
            '& svg': {
              color: palette.common.grey['60']
            }
          };
        }

        break;
      }
      case 'contained': {
        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.grey['95'],
            color: palette.common.grey['60'],
            '& svg': {
              color: palette.common.white
            }
          };
        } else {
          cssObject = {
            backgroundColor: brandColorCode,
            color: palette.common.white,
            '& svg': {
              color: palette.common.white
            }
          };
        }

        break;
      }
      default: {
        cssObject = {
          backgroundColor: palette.common.white,
          borderColor: brandColorCode,
          color: brandColorCode,
          '& > svg': {
            color: brandColorCode
          }
        };

        if (brandColor === 'grey') {
          cssObject = {
            backgroundColor: palette.common.white,
            borderColor: brandColorCode,
            color: palette.common.grey['20'],
            '& > svg': {
              color: palette.common.grey['20']
            }
          };
        }
        break;
      }
    }

    return cssObject;
  }}

  ${({ theme: { typography }, size, weight = 'medium' }): CSSObject => {
    switch (size) {
      case 'small': {
        return {
          height: 34,
          padding: '8px 10px',
          fontSize: typography.body2.size,
          fontWeight: typography.body2.weight[weight],
          lineHeight: typography.body2.lineHeight,
          letterSpacing: typography.body2.letterSpacing,
          '& > svg': {
            width: 15,
            height: 15
          }
        };
      }
      case 'large': {
        return {
          height: 48,
          padding: '12px 16px',
          fontSize: typography.h4.size,
          fontWeight: typography.h4.weight[weight],
          lineHeight: typography.h4.lineHeight,
          letterSpacing: typography.h4.letterSpacing,
          '& > svg': {
            width: 20,
            height: 20
          }
        };
      }
      case 'xlarge': {
        return {
          height: 59,
          padding: '16px 20px',
          fontSize: typography.h3.size,
          fontWeight: typography.h3.weight[weight],
          lineHeight: typography.h3.lineHeight,
          letterSpacing: typography.h3.letterSpacing,
          '& > svg': {
            width: 23,
            height: 23
          }
        };
      }
      default: {
        return {
          height: 41,
          padding: '10px 12px',
          fontSize: typography.body1.size,
          fontWeight: typography.body1.weight[weight],
          lineHeight: typography.body1.lineHeight,
          letterSpacing: typography.body1.letterSpacing,
          '& > svg': {
            width: 18,
            height: 18
          }
        };
      }
    }
  }}
  
  ${({ fullWidth }): CSSObject =>
    fullWidth
      ? {
          width: '100%'
        }
      : {}}

  &:disabled {
    ${({ theme: { palette } }): CSSObject => ({
      borderColor: 'transparent',
      backgroundColor: palette.common.grey['80'],
      color: palette.common.grey['60'],
      '& svg': {
        color: palette.common.grey['60']
      }
    })}
  }
`;
