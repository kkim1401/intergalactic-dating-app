import styled from 'styled-components';

export const Root = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Card = styled.div(() => ({
  border: '1px solid lightgray',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  overflow: 'hidden',
  cursor: 'pointer',
}));

export const Avatar = styled.div(() => ({
  position: 'relative',
  width: '200px',
  height: '200px',
}));

export const Image = styled.img(() => ({
  width: '100%',
}));

export const CardContent = styled.div(() => ({
  position: 'absolute',
  width: '100%',
  bottom: '0',
  borderRadius: 'inherit',
  overflow: 'hidden',
}));

export const UserInfo = styled.div(() => ({
  margin: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',
}));

export const UserInfoContent = styled.div(() => ({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const UserName = styled.h6(() => ({
  fontSize: '16px',
}));

export const UserNameContent = styled.div(() => ({
  display: 'flex',
  marginBottom: '4px',
  alignItems: 'center',
}));

export const UserLocation = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
}));

export const UserLocationContent = styled.div(() => ({
  display: 'flex',
  marginBottom: '4px',
  alignItems: 'center',
}));
