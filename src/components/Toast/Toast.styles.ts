import styled, { CSSObject } from '@emotion/styled';

import { ToastProps } from '.';

export const Wrapper = styled.div<
  Pick<ToastProps, 'transitionDuration'> & {
    toastOpen: boolean;
    toastClose: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  overflow: hidden;
  z-index: 1004;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  ${({ toastOpen }): CSSObject =>
    toastOpen
      ? {
          visibility: 'visible',
          opacity: 1
        }
      : {}}
  ${({ toastClose }): CSSObject =>
    toastClose
      ? {
          opacity: 0
        }
      : {}}
`;

export const StyledToast = styled.div<
  Pick<ToastProps, 'bottom' | 'transitionDuration' | 'disablePadding'> & {
    toastOpen: boolean;
    toastClose: boolean;
  }
>`
  position: absolute;
  left: 50%;
  bottom: ${({ bottom }) => bottom};
  transform: translateX(-50%);
  width: fit-content;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: ${({
    theme: {
      box: { shadow }
    }
  }) => shadow.tooltip};
  color: ${({ theme: { palette } }) => palette.common.white};
  z-index: 1005;

  visibility: hidden;
  opacity: 0;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms cubic-bezier(0, 0, 0.2, 1)
    0ms;

  ${({ disablePadding }): CSSObject =>
    disablePadding
      ? {
          padding: 0
        }
      : {}}

  ${({ toastOpen }): CSSObject =>
    toastOpen
      ? {
          visibility: 'visible',
          opacity: 1
        }
      : {}}
  ${({ toastClose }): CSSObject =>
    toastClose
      ? {
          opacity: 0
        }
      : {}}
`;
