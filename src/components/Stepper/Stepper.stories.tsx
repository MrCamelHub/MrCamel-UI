import React from 'react';
import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';
import Stepper from '@components/Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return <Stepper count={5} {...args} />;
}

export function Counts() {
  return (
    <Wrapper>
      <Stepper count={1} />
      <Stepper count={2} />
      <Stepper count={3} />
      <Stepper count={4} />
      <Stepper count={5} />
    </Wrapper>
  );
}

export function Values() {
  return (
    <Wrapper>
      <Stepper count={5} value={1} />
      <Stepper count={5} value={2} />
      <Stepper count={5} value={3} />
      <Stepper count={5} value={4} />
      <Stepper count={5} value={5} />
    </Wrapper>
  );
}
