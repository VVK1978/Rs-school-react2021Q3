import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchCharacters } from '../../../actions/characters.jsx';
import Button from '../button/button.jsx';
import Input from '../input/Input.jsx';

export default function Search() {
  const searchValue = useSelector((state) => state.characters.searchValue);
  const perPage = useSelector((state) => state.characters.perPage);
  const sortBy = useSelector((state) => state.characters.sortBy);
  const sortDirection = useSelector((state) => state.characters.sortDirection);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
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
