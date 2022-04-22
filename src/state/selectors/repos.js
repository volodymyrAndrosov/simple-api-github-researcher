import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeSelectRepos = () => createSelector(selectGlobal, state => state.repos);

export { makeSelectRepos };
