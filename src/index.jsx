import "./index.less";
import React from "react";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { store } from "./reducers/index.js";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
