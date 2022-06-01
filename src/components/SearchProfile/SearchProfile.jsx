import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  LoadingOrError,
  Root,
  Picture,
  Info,
  Name,
  Status,
  StatusIcon,
  Description,
  DescriptionRow,
  DescriptionRowProperty,
  DescriptionRowValue,
} from './styles';
import Spinner from '../Spinner';
import { pick } from '../../api';

function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
}

function SearchProfile() {
  const { userId } = useParams();
  const { data: profile, isFetching, error } = useQuery(pick.queryKey, () => pick({ id: userId }));

  if (isFetching) return <LoadingOrError as={Spinner} />;

  if (error) return <LoadingOrError>An error has occurred: {error.message}</LoadingOrError>;

  return (
    <Root>
      <Picture src={profile?.image} alt="potential date" />
      <Info>
        <Name>{profile?.name}</Name>
        <Status>
          <StatusIcon status={profile?.status} />
          {capitalizeFirstLetter(profile?.status)} - {profile?.gender}
        </Status>
        <Description>
          <DescriptionRow>
            <DescriptionRowProperty>Species:</DescriptionRowProperty>
            <DescriptionRowValue>{profile?.species}</DescriptionRowValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionRowProperty>Origin:</DescriptionRowProperty>
            <DescriptionRowValue>{profile?.origin?.name}</DescriptionRowValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionRowProperty>Last known location:</DescriptionRowProperty>
            <DescriptionRowValue>{profile?.location?.name}</DescriptionRowValue>
          </DescriptionRow>
        </Description>
      </Info>
    </Root>
  );
}

SearchProfile.propTypes = {};

export default SearchProfile;
