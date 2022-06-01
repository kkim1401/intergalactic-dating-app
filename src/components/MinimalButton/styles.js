import styled from 'styled-components';

export const Root = styled.button(({ style }) => ({
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  margin: 8,
  ...style,
}));
