import _ from 'lodash';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Root, Row, LoadingOrError } from './styles';
import Counter from '../Counter';
import SearchList from '../SearchList';
import SearchOptions from '../SearchOptions';
import Spinner from '../Spinner';
import { list } from '../../api';

const ORDER = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function SearchPage() {
  const { data, isLoading, isSuccess, refetch, error } = useQuery(list.queryKey, list);
  const [sortOrder, setSortOrder] = useState(null);

  const profiles = data?.results;
  const sortedProfiles = useMemo(() => {
    if (profiles && sortOrder) {
      return _.orderBy(profiles, 'name', sortOrder === ORDER.ASC ? 'asc' : 'desc');
    }
    return null;
  }, [profiles, sortOrder]);

  const handleSortAscending = () => {
    setSortOrder(ORDER.ASC);
  };

  const handleSortDescending = () => {
    setSortOrder(ORDER.DESC);
  };

  return (
    <Root>
      <Row>
        <Counter cb={refetch} />
        <SearchOptions
          onSortAscending={handleSortAscending}
          onSortDescending={handleSortDescending}
        />
      </Row>
      {isLoading ? (
        <LoadingOrError as={Spinner} />
      ) : isSuccess ? (
        <SearchList profiles={sortedProfiles || profiles} />
      ) : (
        <LoadingOrError>An error has occurred: {error.message}</LoadingOrError>
      )}
    </Root>
  );
}

export default SearchPage;
