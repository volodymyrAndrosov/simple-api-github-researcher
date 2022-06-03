import React, { useState } from "react";
import styles from "./Input.module.less";
import { useDispatch } from "react-redux";
import { getRepos } from "../../state/actions/repos";
import { setCurrentPage } from "../../state/reducers/reposReducer";

const Input = props => {
  const { value, setValue } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(value, 1, 10));
  };

  return (
    <div className={styles.Container}>
      <input
        placeholder='Input repo name'
        type='text'
        className={styles.Input}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <div className={styles.Button} onClick={onClick}>
        Search
      </div>
    </div>
  );
};

export default Input;
