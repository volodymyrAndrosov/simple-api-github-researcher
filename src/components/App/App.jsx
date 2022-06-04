import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.less";
import Main from "../Main/Main";
import Card from "../Card/Card";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/card/:username/:reponame' element={<Card />} />
          <Route path='*' exact={true} element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
