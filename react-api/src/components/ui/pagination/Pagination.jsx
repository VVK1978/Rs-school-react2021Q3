import React from 'react';
import getSearchCharacters from '../../../services/api.jsx';
import pageCreator from '../../utils/pagesCreator';

export default function Pagination(props) {
  const { data } = props;
  const { updateState } = props;
  const pages = pageCreator(data.totalPages, data.perPage, data.currentPage);
  const handleClick = async (page) => {
    const currentPage = page;
    data.currentPage = page;
    const response = await getSearchCharacters(data);
    const characters = response.docs;
    const updatedData = await { ...data, characters, currentPage };
    await updateState(updatedData);
  };
  return (
    <>
      {data.characters.length !== 0 ? (
        <>
          <div className="pagination-container">
            {pages.map((page, index) => (
              <div key={index}>
                <span
                  className={`pagination-page ${
                    data.currentPage === page ? 'active' : ''
                  }`}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}
