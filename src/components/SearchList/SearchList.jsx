import PropTypes from 'prop-types';
import { Root } from './styles';
import SearchCard from '../SearchCard';

function SearchList({ profiles }) {
  return (
    <Root>
      {profiles?.map((profile) => (
        <SearchCard
          id={profile.id}
          key={profile.id}
          photoUrl={profile.image}
          handle={profile.name}
          location={profile.location.name}
        />
      ))}
    </Root>
  );
}

SearchList.propTypes = {
  profiles: PropTypes.array,
};

export default SearchList;
