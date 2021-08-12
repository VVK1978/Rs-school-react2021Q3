import React, { useState } from 'react';
import dataSort from '../../data/data-sort.jsx';

export default function SortInput(props) {
  const btnClick = (event) => {
    if (event.target.textContent === 'Down') {
      event.target.innerHTML = 'Up';
    } else event.target.innerHTML = 'Down';
  };

  return (
    <div className="sort-container">
      <span className="sort-title">Sort by:</span>
      <select>
        <option>-Select-</option>
        {Object.keys(dataSort[props.cat]).map((el, ind) => (
          <option key={`${dataSort[props.cat][el]}-${ind}`}>
            {dataSort[props.cat][el]}
          </option>
        ))}
      </select>
      <button className="sort-direction" onClick={btnClick}>
        Up
      </button>
    </div>
  );
}
