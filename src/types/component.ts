import { ReactElement, ElementType } from 'react';
import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export type Variant = 'outlined' | 'ghost' | 'contained';
export type BrandColor = 'grey' | 'black' | 'primary' | 'red' | 'purple';
export type BrandExtendsColor = 'dark' | 'light' | 'highlight' | 'bgLight';

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'small1' | 'small2';
export type TypographyComponent = Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'div'>;
export type TypographyWeight = {
  bold: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  medium: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  regular: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  light: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};
export type BoxRoundKey = '0' | '2' | '4' | '8' | '16' | '24';

export type CustomStyle = Interpolation<EmotionTheme>;

export type GenericComponentProps<T> = T & {
  customStyle?: CustomStyle;
};

export type RequireAtOnlyOneIcon<T> = T &
  (
    | {
        iconOnly?: boolean;
        startIcon: ReactElement;
        endIcon?: never;
      }
    | {
        iconOnly?: boolean;
        startIcon?: never;
        endIcon: ReactElement;
      }
    | {
        iconOnly?: never;
        startIcon?: ReactElement;
        endIcon?: ReactElement;
      }
  );
