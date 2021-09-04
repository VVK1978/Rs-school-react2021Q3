/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchCharacters } from '../../../actions/characters';
import Button from '../button/button';
import Input from '../input/Input';

export default function Search() {
  const searchValue = useSelector((state) => state.characters.searchValue);
  const perPage = useSelector((state) => state.characters.perPage);
  const sortBy = useSelector((state) => state.characters.sortBy);
  const sortDirection = useSelector((state) => state.characters.sortDirection);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (document.getElementById('loader')) {
      document.getElementById('loader').classList.add('active');
    }
    dispatch(
      getSearchCharacters(searchValue, perPage, 1, sortBy, sortDirection),
    );
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit} name="search-form">
        <Input />
        <Button />
      </form>
    </>
  );
}
