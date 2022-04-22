const defaultState = {
  items: [],
  isFetching: true,
};

const reposReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reposReducer;
