import axios from 'axios';
import {
  SET_PER_PAGE,
  SET_SEARCH_VALUE,
  SET_SORT_VALUE,
  SET_SORT_DIRECTION,
  SET_CURRENT_PAGE,
  SET_CHARACTERS,
} from '../components/reducers/characterReducer';

export const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 5000,
});

export const headersConfig = {
  Accept: 'application/json',
  Authorization: `${process.env.REACT_APP_API_KEY}`,
};

export const setPerPageLimit = (limit) => ({
  type: SET_PER_PAGE,
  payload: limit,
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});

export const setSortValue = (sortBy) => ({
  type: SET_SORT_VALUE,
  payload: sortBy,
});

export const setSortDirectionValue = (sortDirection) => ({
  type: SET_SORT_DIRECTION,
  payload: sortDirection,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

export const getSearchCharacters = (
  searchValue,
  perPage,
  page = 1,
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
