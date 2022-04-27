const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
  items: [],
  isFetching: true,
};

export const reposReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REPOS: {
      return {
        ...state,
        items: payload.items,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
      };
    }
    default:
      return state;
  }
};

export const setRepos = repos => {
  return {
    type: SET_REPOS,
    payload: repos,
  };
};

export const setIsFetching = isFetching => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};
