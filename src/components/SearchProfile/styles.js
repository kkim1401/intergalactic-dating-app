import styled from 'styled-components';

export const LoadingOrError = styled.div(() => ({
  '&&&': {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '7rem',
  },
}));

export const Root = styled.div({
  '@media (min-width: 481px)': {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Picture = styled.img(() => ({
  width: '100%',
  '@media (min-width: 481px)': {
    marginRight: '1rem',
    width: '300px',
  },
}));

export const Info = styled.div(() => ({}));

export const Name = styled.h1(() => ({
  fontSize: '1.5rem',
  padding: '0 1rem',
  marginTop: '1rem',
}));

export const Status = styled.span(() => ({
  alignItems: 'center',
  display: 'flex',
  fontSize: '1rem',
  marginTop: '0.25rem',
  padding: '0 1rem',
}));

export const StatusIcon = styled.span(({ status }) => ({
  borderRadius: '50%',
  background: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray',
  height: '0.5rem',
  marginRight: '0.25rem',
  width: '0.5rem',
}));

export const Description = styled.div(() => ({
  padding: '0 1rem',
}));

export const DescriptionRow = styled.div(() => ({
  margin: '1.25rem 0',
}));

export const DescriptionRowProperty = styled.div(() => ({
  color: '#413F42',
  fontSize: '1rem',
}));

export const DescriptionRowValue = styled.div(() => ({
  fontSize: '1.125rem',
}));
