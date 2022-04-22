import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.less";
import Main from "../Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
