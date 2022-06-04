import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentRepo } from "../../state/actions/repos";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Card.module.less";
import Loader from "../Loader/Loader";
import { makeSelectRepos } from "../../state/selectors/repos";

const Card = () => {
  const navigate = useNavigate();
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState(null);
  const dispatch = useDispatch();
  const reposData = useSelector(makeSelectRepos());
  const { isFetching } = reposData || {};

  useEffect(() => {
    dispatch(getCurrentRepo(username, reponame, setRepo));
  }, []);

  console.log(repo);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}>
        Back
      </button>
      <div className={styles.Card}>
        <img src={repo?.owner.avatar_url} alt='' />
        <div className={styles.Name}>Name:{repo?.name}</div>
        <div className={styles.Starts}>Start:{repo?.stargazers_count}</div>
      </div>
    </div>
  );
};

export default Card;
