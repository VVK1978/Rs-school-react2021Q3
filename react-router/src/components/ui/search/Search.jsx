import React from 'react';
import Button from '../button/button.jsx';
import Input from '../input/Input.jsx';

export default function Search() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form action="#" className="search-form" onSubmit={handleSubmit}>
        <Input />
        <Button />
      </form>
    </>
  );
}
