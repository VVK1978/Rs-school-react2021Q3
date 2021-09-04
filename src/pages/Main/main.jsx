import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/ui/header/Header.jsx';
import Pagination from '../../components/ui/pagination/Pagination.jsx';
import Character from './character/character.jsx';

export default function Main() {
  const h1 = <h1 className="main-title">React.Redux</h1>;
  const characters = useSelector((state) => state.characters.items);
  const isFetching = useSelector((state) => state.characters.isFetching);
  return (
    <>
      {h1}
      <Header />
      {!isFetching ? (
        <>
          <Character characters={characters} />
          <Pagination />
        </>
      ) : (
        <h2 className="loader">Search by Name please... </h2>
      )}
    </>
  );
}
