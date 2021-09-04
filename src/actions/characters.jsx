import axios from 'axios';
import {
  setCharacters,
  setPerPage,
  setSort,
  setSortDirection,
} from '../components/reducers/characterReducer';

const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 5000,
});

const headersConfig = {
  Accept: 'application/json',
  Authorization: `${process.env.REACT_APP_API_KEY}`,
};

const setPerPageLimit = (limit) => async (dispatch) => {
  await dispatch(setPerPage(limit));
};

const setSearchValue = (searchValue) => async (dispatch) => {
  await dispatch(setSearchValue(searchValue));
};

const setSortValue = (sortBy) => async (dispatch) => {
  await dispatch(setSort(sortBy));
};

const setSortDirectionValue = (sortDirection) => async (dispatch) => {
  await dispatch(setSortDirection(sortDirection));
};

const getSearchCharacters = (
  searchValue,
  perPage,
  page,
  sortBy = 'name',
  sortDirection = 'asc',
) => {
  const request = `/character?name=/${searchValue}/i&limit=${perPage}&page=${page}&sort=${sortBy}:${sortDirection}`;
  return async (dispatch) => {
    const response = await axiosInstance.get(request, {
      headers: headersConfig,
    });
    await dispatch(setCharacters(response.data));
  };
};

export {
  setPerPageLimit,
  setSearchValue,
  getSearchCharacters,
  setSortValue,
  setSortDirectionValue,
};
