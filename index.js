import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import myStore from "./reducers/index";
import './i18n';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
import es from 'javascript-time-ago/locale/es';
 
JavascriptTimeAgo.addLocale(en);
JavascriptTimeAgo.addLocale(es);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  rootElement
);
