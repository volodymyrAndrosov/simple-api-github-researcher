import React from "react";
import styles from "./RepoItem.module.less";

const RepoItem = props => {
  const { name, stargazers_count, updated_at, html_url } = props.repo;

  const date = new Date(updated_at).toString();
  console.log(date);

  return (
    <div className={styles.RepoItem}>
      <div className={styles.RepoHeader}>
        <div className={styles.RepoHeaderName}>Name:{name}</div>
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
