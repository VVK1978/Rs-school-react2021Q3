import React from 'react';
import getSearchCharacters from '../../../services/api.jsx';
import Button from '../button/button.jsx';
import Input from '../input/Input.jsx';

export default function Search(props) {
  const { data } = props;
  const { updateState } = props;
  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    data.isFetching
      ? (document.querySelector('.loader').style.display = 'block')
      : '';
    const searchValue = event.target.search.value;
    data.searchValue = searchValue;
    const response = await getSearchCharacters(data);
    const totalPages = await response.pages;
    const characters = await response.docs;
    const updatedData = {
      ...data,
      searchValue,
      characters,
      totalPages,
    };
    updateState(updatedData);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} name="search-form">
      <Input />
      <Button />
    </form>
  );
}
