import PropTypes from 'prop-types';
import { Root } from './styles';
import MinimalButton from '../MinimalButton';

function SearchOptions({ onSortAscending, onSortDescending }) {
  return (
    <Root>
      <MinimalButton disabled>
        <img src="filter.svg" width={22} alt="filter" />
      </MinimalButton>

      <MinimalButton onClick={onSortAscending}>
        <img src="./ascending.svg" width={22} alt="Sort ascending" />
      </MinimalButton>

      <MinimalButton onClick={onSortDescending}>
        <img src="./descending.svg" width={22} alt="Sort descending" />
      </MinimalButton>
    </Root>
  );
}

SearchOptions.propTypes = {
  onSortAscending: PropTypes.func,
  onSortDescending: PropTypes.func,
};

export default SearchOptions;
