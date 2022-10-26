import { useSelector, useDispatch } from 'react-redux';
import { FilterForm, Title2 } from './Filter.styled';
import { getFilter } from 'components/redux/selectors';
import * as actions from '../redux/actions';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <div>
      <Title2>Contacts</Title2>
      <label>
      <span>Find contact by name</span>
        <FilterForm
          type="text"
          name="filter"
          onChange={changeFilter}
          value={filterValue}
          placeholder="Enter name to search"
        />
      </label>
    </div>
  );
};

export default Filter;




