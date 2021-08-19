import React, { useState } from 'react';
import Header from '../../components/ui/header/Header.jsx';
import Pagination from '../../components/ui/pagination/Pagination.jsx';
import Character from './character/character.jsx';

export default function Main() {
  const [searchValue, setSearchValue] = useState('lala');
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const h1 = <h1 className="main-title">React.API</h1>;
  const data = {
    searchValue,
    characters,
    isFetching,
    perPage,
    currentPage,
    totalPages,
    sortBy,
    sortDirection,
  };
  const updateState = async (updatedData) => {
    await setSearchValue(updatedData.searchValue);
    await setCharacters(updatedData.characters);
    await setPerPage(updatedData.perPage);
    await setCurrentPage(updatedData.currentPage);
    await setTotalPages(updatedData.totalPages);
    await setSortBy(updatedData.sortBy);
    await setSortDirection(updatedData.sortDirection);
    await setIsFetching(true);
    if (updatedData.characters !== false) {
      setIsFetching(false);
    }
  };
  return (
    <>
      {h1}
      <Header data={data} updateState={updateState} />
      {!isFetching ? (
        <>
          <Character data={data} updateState={updateState} />
          <Pagination data={data} updateState={updateState} />
        </>
      ) : (
        <>
          <h2 className="loader">Loading...</h2>
        </>
      )}
    </>
  );
}
