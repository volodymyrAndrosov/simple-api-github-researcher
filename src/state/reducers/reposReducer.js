const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_CURRENT_PAGE = "SET_IS_CURRENT_PAGE";

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

export const reposReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REPOS: {
      return {
        ...state,
        items: payload.items,
        totalCount: payload.total_count,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
      };
    }
    case SET_IS_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
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

export const setCurrentPage = currentPage => {
  return {
    type: SET_IS_CURRENT_PAGE,
    payload: currentPage,
  };
};
