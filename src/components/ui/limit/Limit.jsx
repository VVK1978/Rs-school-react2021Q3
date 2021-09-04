import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPerPageLimit,
  getSearchCharacters,
} from '../../../actions/characters';
import { setCurrentPage } from '../../reducers/characterReducer';

export default function Limit(props) {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.characters.searchValue);
  const sortBy = useSelector((state) => state.characters.sortBy);
  const firstPage = 1;
  const handlerChange = (event) => {
    const perPage = parseInt(event.target.value, 10);
    dispatch(setPerPageLimit(perPage));
    dispatch(setCurrentPage(firstPage));
    dispatch(getSearchCharacters(searchValue, perPage, firstPage, sortBy));
  };
  return (
    <>
      <label htmlFor="limit" className="limit-label">
        Limit
        <select
          type="number"
          className="limit-select"
          id="limit"
          onChange={handlerChange}
        >
          {props.options.map((option, ind) => (
            <option key={ind}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
}
