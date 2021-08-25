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
    const characters = { items: [], totalPages: 1, isFetching: false };
    expect(setCharacters(characters)).toEqual({
      type: 'SET_CHARACTERS',
      payload: characters,
    });
  });
});

describe('>>>Action test (async)', () => {
  const baseURL = 'https://the-one-api.dev/v2';
  const searchValue = 'asa';
  const perPage = 10;
  const page = 1;
  const sortBy = 'name';
  const sortDirection = 'asc';
  const request = `/character?name=/${searchValue}/i&limit=${perPage}&page=${page}&sort=${sortBy}:${sortDirection}`;
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('', () => {
    fetchMock.getOnce(`${baseURL}${request}`, {
      headers: { 'content-type': 'application/json' },
      body: {
        data: {
          docs: {
            birth: 'Late ,Third Age',
            death: 'Presumably sometime after ,TA 3019',
            gender: 'Male',
            hair: '',
            height: '',
            name: 'Harry Goatleaf',
            race: 'Human',
            realm: '',
            spouse: '',
            wikiUrl: 'http://lotr.wikia.com//wiki/Harry_Goatleaf',
            _id: '5cd99d4bde30eff6ebccfeb2',
          },
          limit: 10,
          page: 1,
          pages: 1,
          total: 1,
        },
        status: 200,
      },
    });
    const actions = setCharacters({
      type: 'SET_CHARACTERS',
      payload: {},
    });
    const store = mockStore({});
    store.dispatch(actions);

    return store.dispatch(getSearchCharacters('af', 10)).then(() => {
      expect(store.getActions()).toEqual(actions);
    });
  });
});
