import styled from 'styled-components';

export const Root = styled.main(() => ({
  margin: 24,
}));

export const Row = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const LoadingOrError = styled.div(() => ({
  '&&&': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '7rem',
  },
}));
