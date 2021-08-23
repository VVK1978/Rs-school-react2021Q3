import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {
  setPerPageLimit,
  setSearchValue,
  setSortValue,
  setSortDirectionValue,
  setCurrentPage,
  getSearchCharacters,
  setCharacters,
} from './characters.jsx';

const mockStore = configureMockStore([thunk]);

describe('>>>Actions tests (sync)...', () => {
  it('should checking action setPerPageLimit', () => {
    expect(setPerPageLimit()).toEqual({ type: 'SET_PER_PAGE' });
  });

  it('should checking action setSearchValue', () => {
    const searchValue = 'a';
    expect(setSearchValue(searchValue)).toEqual({
      type: 'SET_SEARCH_VALUE',
      payload: searchValue,
    });
  });

  it('should checking action sortBy', () => {
    const sortBy = 'name';
    expect(setSortValue(sortBy)).toEqual({
      type: 'SET_SORT_VALUE',
      payload: sortBy,
    });
  });

  it('should checking action setSortDirection', () => {
    const sortDirection = 'asc';
    expect(setSortDirectionValue(sortDirection)).toEqual({
      type: 'SET_SORT_DIRECTION',
      payload: sortDirection,
    });
  });

  it('should checking action setCurrentPage', () => {
    const currentPage = 1;
    expect(setCurrentPage(currentPage)).toEqual({
      type: 'SET_CURRENT_PAGE',
      payload: currentPage,
    });
  });

  it('should checking action setCharacters', () => {
    const characters = { a: 1, b: 2 };
    expect(setCharacters(characters)).toEqual({
      type: 'SET_CHARACTERS',
      payload: characters,
    });
  });
});

describe('>>>Action test (async)', () => {
  const API_URL = 'https://the-one-api.dev/v2/characters?name=/"asa"/i&page=1';
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('', () => {
    fetchMock.getOnce(API_URL, {
      headers: { 'content-type': 'application/json' },
      body: {
        data: { docs: { name: 'asa', _id: 1213, gender: 'mail' } },
        status: 'ok',
      },
    });
    const actions = setCharacters();
    const store = mockStore({});
    console.log(store.getActions());
    return store.dispatch(getSearchCharacters('asa', 10)).then(() => {
      expect(store.getActions()).toEqual(actions);
    });
  });
});
