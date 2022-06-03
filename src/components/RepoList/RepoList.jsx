import React from "react";
import RepoItem from "../RepoItem/RepoItem";

const RepoList = ({ repoListData }) => {
  if (!repoListData.length) return null;

  return repoListData.map((repoItemData, index) => {
    return <RepoItem repo={repoItemData} key={index} />;
  });
};

export default RepoList;
