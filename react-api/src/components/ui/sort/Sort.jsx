import React from 'react';
import getSearchCharacters from '../../../services/api.jsx';

export default function Sort(props) {
  const { data } = props;
  const { options } = props;
  const { updateState } = props;
  // eslint-disable-next-line operator-linebreak
  const defaultValueOfSelect =
    data.sortBy[0].toUpperCase() + data.sortBy.slice(1);
  const handlerChange = async (event) => {
    const sortBy = event.target.value.toLowerCase();
    data.sortBy = sortBy;
    const response = await getSearchCharacters(data);
    const characters = await response.docs;
    const updatedData = await { ...data, sortBy, characters };
    await updateState(updatedData);
  };
  return (
    <>
      <label htmlFor="sort" className="sort-label">
        Sort by:
        <select
          type="text"
          className="sort-select"
          id="sort"
          onChange={handlerChange}
          defaultValue={defaultValueOfSelect}
        >
          {options.map((option, ind) => (
            <option key={`${option}-${ind}`}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
}
