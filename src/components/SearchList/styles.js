import styled from 'styled-components';

export const Root = styled.div(() => ({
  '@media (min-width: 481px)': {
    gridGap: '16px',
  },
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gridGap: '8px',
}));
