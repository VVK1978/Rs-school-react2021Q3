import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import arrowUp from '../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import {
  setSortDirectionValue,
  getSearchCharacters,
} from '../../../actions/characters';

export default function SortDirection() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.characters.searchValue);
  const perPage = useSelector((state) => state.characters.perPage);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const sortBy = useSelector((state) => state.characters.sortBy);
  const sortDirection = useSelector((state) => state.characters.sortDirection);
  const handleClick = () => {
    if (sortDirection === 'asc') {
      dispatch(setSortDirectionValue('desc'));
      dispatch(
        getSearchCharacters(searchValue, perPage, currentPage, sortBy, 'desc'),
      );
    } else {
      dispatch(setSortDirectionValue('asc'));
      dispatch(
        getSearchCharacters(searchValue, perPage, currentPage, sortBy, 'asc'),
      );
    }
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        <img
          src={sortDirection === 'asc' ? arrowUp : arrowDown}
          alt="arrow"
          className="direction-img"
        />
      </button>
    </div>
  );
}
