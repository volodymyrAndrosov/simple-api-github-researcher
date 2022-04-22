import React from "react";
import styles from "./RepoItem.module.less";

const RepoItem = props => {
  const { name, stargazers_count, updated_at, html_url } = props.repo;

  return (
    <div className={styles.RepoItem}>
      <div className={styles.RepoHeader}>
        <div className={styles.RepoHeaderName}>{name}</div>
        <div className={styles.RepoHeaderRating}>{stargazers_count}</div>
      </div>
      <div className={styles.RepoLastCommit}>{updated_at}</div>
      <a href={html_url} className={styles.RepoLink}>
        Link
      </a>
    </div>
  );
};

export default RepoItem;
