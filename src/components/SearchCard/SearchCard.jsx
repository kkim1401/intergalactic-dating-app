import {
  Root,
  Card,
  Avatar,
  Image,
  CardContent,
  UserInfo,
  UserInfoContent,
  UserName,
  UserNameContent,
  UserLocation,
  UserLocationContent,
} from './styles';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchCard({ photoUrl = '', handle = '', id, location = '' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/${id}`);
  };

  return (
    <Root onClick={handleClick}>
      <Card>
        <Avatar>
          <Image src={photoUrl} alt="potential date"></Image>
          <CardContent>
            <UserInfo>
              <UserInfoContent>
                <UserName>
                  <UserNameContent>{handle}</UserNameContent>
                </UserName>
                <UserLocation>
                  <UserLocationContent>
                    <span>{location}</span>
                  </UserLocationContent>
                </UserLocation>
              </UserInfoContent>
            </UserInfo>
          </CardContent>
        </Avatar>
      </Card>
    </Root>
  );
}

SearchCard.propTypes = {
  handle: PropTypes.string,
  photoUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  location: PropTypes.string,
};

export default memo(SearchCard);
