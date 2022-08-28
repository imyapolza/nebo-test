import { CharacterApi } from "../api";
import { ActionTypes } from "./actionTypes";

export const initalState = {
  characters: [],
  searchCharacters: [],
  isSearchLoading: false,
  isLoading: false,
  page: 1,
  count: null,
  searchCurr: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case ActionTypes.SET_SEARCH_CHARACTERS:
      return {
        ...state,
        searchCharacters: action.payload,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ActionTypes.SET_SEARCH_LOADING:
      return {
        ...state,
        isSearchLoading: action.payload,
      };

    case ActionTypes.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    case ActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case ActionTypes.SET_FILTER:
      console.log(state.characters);

      const newState = { ...state };

      const getSearch = async () => {
        const { results } = await CharacterApi.search(action.payload);
        newState.searchCurr = results;
      };

      getSearch();

      return newState;

    default:
      return new Error();
  }
}

export default reducer;
