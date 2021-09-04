import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/ui/header/Header';
import Pagination from '../../components/ui/pagination/Pagination';
import Character from './character/character';

export default function Main() {
  const characters = useSelector((state) => state.characters.items);
  const isFetching = useSelector((state) => state.characters.isFetching);
  return (
    <>
      <Header />
      {!isFetching ? (
        <>
          <Character characters={characters} />
          <Pagination />
        </>
      ) : (
        <h2 className="loader" id="loader">
          Loading...
        </h2>
      )}
    </>
  );
}
