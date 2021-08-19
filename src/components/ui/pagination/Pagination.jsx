import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/characterReducer';
import { getSearchCharacters } from '../../../actions/characters.jsx';
import pageCreator from '../../utils/pagesCreator';

export default function Pagination() {
  const totalPages = useSelector((state) => state.characters.totalPages);
  const perPage = useSelector((state) => state.characters.perPage);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const searchValue = useSelector((state) => state.characters.searchValue);
  const sortBy = useSelector((state) => state.characters.sortBy);
  const dispatch = useDispatch();
  const pages = pageCreator(totalPages, perPage, currentPage);
  const handleClick = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getSearchCharacters(searchValue, perPage, page, sortBy));
  };
  return (
    <div className="pagination-container">
      {pages.map((page, index) => (
        <div key={index}>
          <span
            className={`pagination-page ${
              currentPage === page ? 'active' : ''
            }`}
            onClick={() => handleClick(page)}
          >
            {page}
          </span>
        </div>
      ))}
    </div>
  );
}
