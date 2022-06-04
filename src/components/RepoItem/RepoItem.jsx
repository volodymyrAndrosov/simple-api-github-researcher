import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./RepoItem.module.less";

const RepoItem = props => {
  const { name, stargazers_count, updated_at, html_url, owner } = props.repo;
  const date = new Date(updated_at).toString();

  return (
    <div className={styles.RepoItem}>
      <div className={styles.RepoHeader}>
        <div className={styles.RepoHeaderName}>
          <NavLink to={`/card/${owner.login}/${name}`}>Name:{name}</NavLink>
        </div>
        <div className={styles.RepoHeaderRating}>Rate: {stargazers_count}</div>
      </div>
      <div className={styles.RepoLastCommit}>Date: {date}</div>
      <a href={html_url} className={styles.RepoLink}>
        Link
      </a>
    </div>
  );
};

export default RepoItem;
