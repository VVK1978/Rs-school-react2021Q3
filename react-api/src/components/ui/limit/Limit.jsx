import React from 'react';
import getSearchCharacters from '../../../services/api.jsx';

export default function Limit(props) {
  const { data } = props;
  const { updateState } = props;
  const handlerChange = async (event) => {
    const perPage = parseInt(event.target.value, 10);
    data.perPage = perPage;
    data.currentPage = 1;
    const isFetching = true;
    const response = await getSearchCharacters(data);
    const totalPages = await response.pages;
    const characters = response.docs;
    const updatedData = await {
      ...data,
      characters,
      totalPages,
      isFetching,
    };
    await updateState(updatedData);
  };
  return (
    <>
      <label htmlFor="limit" className="limit-label">
        Limit
        <select
          type="number"
          className="limit-select"
          id="limit"
          onChange={handlerChange}
          defaultValue={data.perPage}
        >
          {props.options.map((option, ind) => (
            <option key={ind}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
}
