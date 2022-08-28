import { ActionTypes } from "./actionTypes";


export function setCharacters(payload) {
  return { type: ActionTypes.SET_CHARACTERS, payload };
}

export function setSearchCharacters(payload) {
  return { type: ActionTypes.SET_SEARCH_CHARACTERS, payload };
}

export function setLoading(payload) {
  return { type: ActionTypes.SET_LOADING, payload };
}

export function setSearchLoading(payload) {
  return { type: ActionTypes.SET_SEARCH_LOADING, payload };
}

export function setCount(payload) {
  return { type: ActionTypes.SET_COUNT, payload };
}

export function setPage(payload) {
  return { type: ActionTypes.SET_PAGE, payload };
}

export function setSearchByName(payload) {
  return { type: ActionTypes.SET_FILTER, payload };
}


