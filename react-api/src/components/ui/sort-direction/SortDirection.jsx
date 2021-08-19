import React from 'react';
import getSearchCharacters from '../../../services/api.jsx';
import arrowUp from '../../../assets/icons/arrow-up.svg';
import arrowDown from '../../../assets/icons/arrow-down.svg';

export default function SortDirection(props) {
  const { data } = props;
  const { updateState } = props;
  const getSearchCharactersAndUpdateState = async (sortDirection) => {
    const response = await getSearchCharacters(data);
    const characters = await response.docs;
    const updatedData = await { ...data, characters, sortDirection };
    await updateState(updatedData);
  };
  const changeSortDirection = async (direction) => {
    const sortDirection = direction;
    data.sortDirection = sortDirection;
    getSearchCharactersAndUpdateState(direction);
  };
  const handleClick = () => {
    if (data.sortDirection === 'asc') {
      changeSortDirection('desc');
    } else {
      changeSortDirection('asc');
    }
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        <img
          src={data.sortDirection === 'asc' ? arrowUp : arrowDown}
          alt="arrow"
          className="direction-img"
        />
      </button>
    </div>
  );
}
