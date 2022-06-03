import React from "react";
import styles from "./Main.module.less";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { makeSelectRepos } from "../../state/selectors/repos";
import { getRepos } from "../../state/actions/repos";
import RepoList from "../RepoList/RepoList";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { createPagesHook } from "../../hooks/createPagesHook";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const reposData = useSelector(makeSelectRepos());
  const { items, isFetching, currentPage, perPage, totalCount } = reposData || {};
  const pagesCount = Math.ceil(totalCount / perPage);
  const { pages } = createPagesHook(pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  return (
    <div className={styles.Main}>
      <h1>Main Page</h1>
      <Input value={searchValue} setValue={setSearchValue} />
      {isFetching ? <Loader /> : <RepoList repoListData={items} />}
      <Pagination pages={pages} currentPage={currentPage} />
    </div>
  );
};

export default Main;
