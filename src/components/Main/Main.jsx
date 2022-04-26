import React from "react";
import styles from "./Main.module.less";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { makeSelectRepos } from "../../state/selectors/repos";
import { getRepos } from "../../state/actions/repos";
import RepoList from "../RepoList/RepoList";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";

const Main = () => {
  const dispatch = useDispatch();
  const reposData = useSelector(makeSelectRepos());
  const { items, isFetching } = reposData || {};

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div className={styles.Main}>
      <h1>Main Page</h1>
      <Input />
      {isFetching ? <Loader /> : <RepoList repoListData={items} />}
    </div>
  );
};

export default Main;
