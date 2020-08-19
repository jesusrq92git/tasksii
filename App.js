import React, { useState } from "react";
import NavBar from "./components/Layout/NavBar";
import Login from "./components/Login/index";
import AddBoard from "./components/AddBoard/index";
import Boards from "./components/Boards/index";
import LayoutRoute from "./components/Layout/layoutRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { languageAction } from "./actions/login.action";
import { connect } from 'react-redux';

function App(props) {
  const { i18n, t } = useTranslation();

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    props.languageAction(lang);
  }

  const { LoginReducer } = props;

  return (
    <Router>
      <NavBar />
      <div className={"btn-lang"}>
        <p 
          onClick={() => handleLanguage("en")} 
          className={LoginReducer.language === "en"?"active-link":""}>
          {t('english')}
        </p>
        <p 
          onClick={() => handleLanguage("es")} 
          className={LoginReducer.language === "es"?"active-link":""}>
          {t('spanish')}
        </p>
      </div>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <LayoutRoute exact path={"/add-boards"} component={AddBoard} />
        <LayoutRoute exact path={"/boards"} component={Boards} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

const Error404 = () => {
  return <p>Error</p>;
};

const mapStateToProps = (state) => ({
  LoginReducer: state.LoginReducer
});

const mapDispatchToProps = () => {
  return {
    languageAction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);