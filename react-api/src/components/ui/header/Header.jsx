import React from 'react';
import Search from '../search/Search.jsx';

export default function Header(props) {
  const { data } = props;
  const { updateState } = props;
  return (
    <header className="head">
      <Search data={data} updateState={updateState} />
    </header>
  );
}
