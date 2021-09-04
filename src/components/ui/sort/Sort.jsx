import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchCharacters, setSortValue } from '../../../actions/characters';

export default function Sort(props) {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.characters.searchValue);
  const perPage = useSelector((state) => state.characters.perPage);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const handlerChange = (event) => {
    const sortBy = event.target.value.toLowerCase();
    dispatch(setSortValue(sortBy));
    dispatch(getSearchCharacters(searchValue, perPage, currentPage, sortBy));
  };
  return (
    <>
      <label htmlFor="sort" className="sort-label">
        Sort by:
        <select
          type="text"
          className="sort-select"
          id="sort"
          onChange={handlerChange}
        >
          {props.options.map((option, ind) => (
            <option key={`${option}-${ind}`}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
}
