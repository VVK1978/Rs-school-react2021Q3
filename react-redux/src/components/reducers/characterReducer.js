const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PER_PAGE = 'SET_PER_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SORT_VALUE = 'SET_SORT_VALUE';
const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalPages: 0,
  searchValue: '',
  sortBy: 'name',
  sortDirection: 'asc',
};
export default function characterReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        items: action.payload.docs,
        totalPages: action.payload.pages,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_SORT_VALUE:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: action.payload,
      };
    default:
      return state;
  }
}

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setPerPage = (perPage) => ({
  type: SET_PER_PAGE,
  payload: perPage,
});

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue,
});

export const setSort = (sortBy) => ({
  type: SET_SORT_VALUE,
  payload: sortBy,
});

export const setSortDirection = (sortDirection) => ({
  type: SET_SORT_DIRECTION,
  payload: sortDirection,
});
