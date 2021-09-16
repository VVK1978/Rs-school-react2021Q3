import React from 'react';

export default function Input() {
  const handlerChange = () => {};
  return (
    <input
      type="text"
      className="search-input"
      onChange={handlerChange}
      name="search"
      placeholder="Search by name..."
    />
  );
}
