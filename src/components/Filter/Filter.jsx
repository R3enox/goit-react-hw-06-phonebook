import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/filter/filterSelectors';
import { filterChange } from 'redux/filter/filterSlice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = evt => {
    const filterValue = evt.target.value.toLowerCase().trim();
    dispatch(filterChange(filterValue));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.labelText}>
        Find contacts by name
        <input
          className={css.inputAdd}
          type="text"
          name="filter"
          value={value}
          onChange={filterContacts}
        />
      </label>
    </div>
  );
};
