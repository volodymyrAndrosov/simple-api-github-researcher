import React from "react";
import RepoItem from "../RepoItem/RepoItem";

const RepoList = ({ repoListData }) => {
  console.log("repoListData");
  console.log(repoListData);

  if (!repoListData.length) return null;

  return repoListData.map((repoItemData, index) => {
    return <RepoItem repo={repoItemData} key={index} />;
  });
};

export default RepoList;
