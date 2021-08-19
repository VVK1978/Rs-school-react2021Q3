import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../reducers/characterReducer';

export default function Input() {
  const dispatch = useDispatch();

  const handlerChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };
  return (
    <>
      <input
        type="text"
        className="search-input"
        onChange={handlerChange}
				name="search"
				placeholder='Search by name...'
      />
    </>
  );
}
