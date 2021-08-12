/* eslint-disable no-confusing-arrow */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import search from '../../assets/icons/search.svg';
import axiosInstance from '../../services/api/api.jsx';
import Table from '../card/card.jsx';
import Btn from '../button/button.jsx';
import SortInput from '../sort/sort.jsx';
import dataBtn from '../../data/data-btn.jsx';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState(null);
  const [data, setData] = useState([]);
  const [books, setBooks] = useState([]);
  const [movie, setMovie] = useState([]);
  const [character, setCharacter] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const allCategories = ['book', 'film', 'character', 'quote', 'chapter'];
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const headersConfig = {
    Accept: 'application/json',
    Authorization: `${process.env.REACT_APP_API_KEY}`,
  };

  const changeIdToData = async (temp, targetId) => {
    const datas = temp;
    await datas.map((el, ind) => {
      if (targetId === 'chapter') {
        books.findIndex((elem) =>
          elem._id === datas[ind].book ? (datas[ind].book = elem.name) : '',
        );
      } else {
        const categories = ['character', 'movie'];
        [character, movie].forEach((item, index) => {
          item.findIndex((elem) =>
            elem._id === datas[ind][categories[index]]
              ? (datas[ind][categories[index]] = elem.name)
              : '',
          );
        });
      }
      return datas;
    });
    setData(datas);
    setLoader(false);
  };

  const handleSubmit = async (event) => {
    console.log('submit...', category);
    // setLoader(true);
    event.preventDefault();
    // setIsLoading(true);
    if (category) {
      setIsSearch(true);
      try {
        //  setSearchValue('');
        await axiosInstance
          .get(
            `/${allCategories[category]}?gender=/${searchValue}/i&limit=${limit}`,
            {
              headers: headersConfig,
            },
          )
          .then((response) => {
            console.log('found results: ', response.data);
            setPage(1);
            setPages(response.data.pages);
            setData(response.data.docs);
            setLoader(false);
          });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const chooseCategory = async (event, lim, pageNumber) => {
    let targetId = null;
    setLoader(true);
    if (event) {
      targetId = event.target.id;
      setCategory(parseInt(event.target.getAttribute('data-btn'), 10));
    } else {
      targetId = dataBtn[category].id;
    }
    try {
      await axiosInstance
        .get(`/${targetId}/?page=${pageNumber}&limit=${lim}`, {
          headers: headersConfig,
        })
        .then((response) => {
          console.log(response);
          setPages(response.data.pages);
          if (targetId === 'chapter' || targetId === 'quote') {
            changeIdToData(response.data.docs, targetId);
          } else {
            setData(response.data.docs);
            setLoader(false);
          }
        });
    } catch (e) {
      console.error(e);
    }
  };

  const pageResetAndChoose = (event) => {
    setPage(1);
    chooseCategory(event, limit, 1);
  };

  const searchResult = async () => {
    try {
      await axiosInstance
        .get(
          `/${allCategories[category]}?gender=/${searchValue}/i&limit=${limit}&page=${page}`,
          {
            headers: headersConfig,
          },
        )
        .then((response) => {
          console.log('found results: ', response.data);
          setData(response.data.docs);
          setLoader(false);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const pagePagination = (event) => {
    if (isSearch === false) {
      if (data.length !== 0) {
        if (event.target.id === 'right') {
          if (limit === data.length) {
            setPage(page + 1);
            chooseCategory(false, limit, page + 1);
          }
        } else if (page === 1) {
          setPage(1);
        } else {
          setPage(page - 1);
          chooseCategory(false, limit, page - 1);
        }
      }
    } else {
      setPage(page + 1);
      searchResult();
    }
  };

  const getBoookAndMovieData = () => {
    ['book', 'movie', 'character'].map(async (el) => {
      try {
        await axiosInstance
          .get(`/${el}`, { headers: headersConfig })
          .then((response) => {
            if (el === 'book') {
              setBooks(response.data.docs);
            } else if (el === 'movie') {
              setMovie(response.data.docs);
            } else {
              setCharacter(response.data.docs);
            }
          });
      } catch (e) {
        console.error(e);
      }
    });
  };

  if (books.length === 0) {
    getBoookAndMovieData();
  }

  return (
    <>
      <div className="search-content">
        <form
          className="search-form"
          onSubmit={handleSubmit}
          name="search-form"
        >
          <label htmlFor="search">
            <input
              id="search"
              name="search"
              type="text"
              className="search-input"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search..."
            />
          </label>
          <button type="submit" className="btn-search" disabled={loader}>
            <img src={search} />
          </button>
        </form>
      </div>
      <div className="pagination-content">
        <h2 className="choose">Choose Category and after search...</h2>
        <div className="pagination-container">
          <div className="limit-elements">
            <label htmlFor="limit" className="limit-label">
              Limit on page
              <select
                type="number"
                className="limit-input"
                id="limit"
                onChange={(event) => {
                  const limitNumber = parseInt(event.target.value, 10);
                  setLimit(limitNumber);
                  if (data.length !== 0) {
                    chooseCategory(false, limitNumber);
                  }
                }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
          </div>
          <div className="current-page">
            <span className="page-title"> </span>
            <button className="btn-left" onClick={pagePagination}>
              <img
                className="arrow-img"
                id="left"
                src={leftArrow}
                alt="left-arrow"
              />
            </button>
            <span className="page-number" id="page">
              {page} from {pages}
            </span>
            <button className="btn-right" id="right" onClick={pagePagination}>
              <img
                className="arrow-img"
                id="right"
                src={rightArrow}
                alt="right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container-btns">
        {dataBtn.map((el, ind) => (
          <Btn
            data={el}
            key={ind}
            id={ind}
            pageResetAndChoose={(event) => pageResetAndChoose(event)}
            chooseCategory={(event) => chooseCategory(event, limit, page)}
          />
        ))}
      </div>
      {data.length !== 0 ? <SortInput cat={category} /> : ''}
      {loader ? (
        <h2 className="loader">Loading...</h2>
      ) : data.length !== 0 ? (
        <Table cardData={data} cat={category} />
      ) : (
        ''
      )}
    </>
  );
}
