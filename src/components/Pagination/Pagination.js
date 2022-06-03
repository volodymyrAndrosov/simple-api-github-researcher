import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../state/reducers/reposReducer";
import styles from "./Pagination.module.less";

const Pagination = props => {
  const { pages, currentPage } = props;

  return (
    <div className={styles.PagesContainer}>
      {pages.map((item, index) => {
        return <PaginationItem key={index} pageValue={item} currentPage={currentPage} />;
      })}
    </div>
  );
};

const PaginationItem = ({ pageValue, currentPage }) => {
  const className = currentPage === pageValue ? styles.ActiveItemPage : styles.PageItem;
  const dispatch = useDispatch();

  return (
    <div
      className={className}
      onClick={() => {
        dispatch(setCurrentPage(pageValue));
      }}>
      {pageValue}
    </div>
  );
};

export default Pagination;
