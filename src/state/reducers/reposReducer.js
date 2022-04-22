const SET_REPOS = "SET_REPOS";

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
