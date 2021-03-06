import styled, { CSSObject } from '@emotion/styled';

import { getBrandColorCodeByColorName } from '@utils';

import { ChipProps } from './index';

export const StyledChip = styled.button<
  Pick<ChipProps, 'variant' | 'brandColor' | 'size' | 'weight' | 'isRound' | 'fullWidth'>
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid transparent;

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
            backgroundColor: palette.common.grey['60'],
            color: palette.common.white,
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

  ${({ theme: { typography }, size, weight = 'regular', isRound }): CSSObject => {
    switch (size) {
      case 'xsmall': {
        return {
          height: 23,
          padding: isRound ? '6px 8px' : 6,
          borderRadius: isRound ? 36 : 4,
          gap: 2,
          fontSize: typography.small2.size,
          fontWeight: typography.small2.weight[weight],
          lineHeight: typography.small2.lineHeight,
          letterSpacing: typography.small2.letterSpacing,
          '& > svg': {
            width: 15,
            height: 15
          }
        };
      }
      case 'small': {
        return {
          height: 30,
          padding: isRound ? '6px 8px' : 6,
          borderRadius: isRound ? 36 : 4,
          gap: 2,
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
          height: 40,
          padding: isRound ? '8px 12px' : '8px 10px',
          borderRadius: isRound ? 36 : 8,
          gap: 4,
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
          height: 47,
          padding: isRound ? '10px 14px' : '10px 12px',
          borderRadius: isRound ? 36 : 8,
          gap: 4,
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
          height: 33,
          padding: isRound ? '6px 10px' : '6px 8px',
          borderRadius: isRound ? 36 : 4,
          gap: 2,
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
