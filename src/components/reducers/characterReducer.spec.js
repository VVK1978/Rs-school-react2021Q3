/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import * as defaultState from './characterReducer';
import characterReducer from './characterReducer';

describe('Reducer tests on dispatching', () => {
  const mockStore = configureStore(defaultState);
  let store;

  beforeEach(() => {
    store = mockStore(defaultState);
  });

  it('should checking action SET_PER_PAGE on dispatching', () => {
    store.dispatch(defaultState.setPerPage(20));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_PER_PAGE');
  });

  it('should checking action SET_PER_PAGE', () => {
    const action = {
      type: 'SET_PER_PAGE',
      payload: 20,
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      perPage: action.payload,
    });
  });

  it('should checking action SET_IS_FETCHING on dispatching', () => {
    store.dispatch(defaultState.setIsFetching(true));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_IS_FETCHING');
  });

  it('should checking action SET_IS_FETCHING', () => {
    const action = {
      type: 'SET_IS_FETCHING',
      payload: true,
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      isFetching: action.payload,
    });
  });

  it('should checking action SET_CURRENT_PAGE on dispatching', () => {
    store.dispatch(defaultState.setCurrentPage(2));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_CURRENT_PAGE');
  });

  it('should checking action SET_CURRENT_PAGE', () => {
    const action = {
      type: 'SET_CURRENT_PAGE',
      payload: 2,
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      currentPage: action.payload,
    });
  });

  it('should checking action SET_SEARCH_VALUE on dispatching', () => {
    store.dispatch(defaultState.setSearchValue('2'));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_SEARCH_VALUE');
  });

  it('should checking action SET_SEARCH_VALUE', () => {
    const action = {
      type: 'SET_SEARCH_VALUE',
      payload: 2,
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      searchValue: action.payload,
    });
  });

  it('should checking action SET_SORT_VALUE on dispatching', () => {
    store.dispatch(defaultState.setSort('name'));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_SORT_VALUE');
  });

  it('should checking action SET_SORT_VALUE', () => {
    const action = {
      type: 'SET_SORT_VALUE',
      payload: 'name',
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      sortBy: action.payload,
    });
  });

  it('should checking action SET_SORT_DIRECTION on dispatching', () => {
    store.dispatch(defaultState.setSortDirection('asc'));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_SORT_DIRECTION');
  });

  it('should checking action SET_SORT_DIRECTION', () => {
    const action = {
      type: 'SET_SORT_DIRECTION',
      payload: 'asc',
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      sortDirection: action.payload,
    });
  });

  it('should checking action SET_CHARACTERS on dispatching', () => {
    store.dispatch(defaultState.setCharacters([{ a: 1, b: 2 }]));
    const action = store.getActions();
    expect(action[0].type).toBe('SET_CHARACTERS');
  });

  it('should checking action SET_CHARACTERS', () => {
    const action = {
      type: 'SET_CHARACTERS',
      payload: { docs: { a: 1, b: 2 }, pages: 5 },
      isFetching: false,
    };
    expect(characterReducer(defaultState, action)).toEqual({
      ...defaultState,
      items: action.payload.docs,
      totalPages: action.payload.pages,
      isFetching: action.isFetching,
    });
  });
});
