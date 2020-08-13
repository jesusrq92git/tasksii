import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import myStore from "./reducers/index";
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
 
JavascriptTimeAgo.addLocale(en);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  rootElement
);
