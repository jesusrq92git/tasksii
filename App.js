import React, { useState } from "react";
import NavBar from "./components/Layout/NavBar";
import Login from "./components/Login/index";
import AddBoard from "./components/AddBoard/index";
import Boards from "./components/Boards/index";
import LayoutRoute from "./components/Layout/layoutRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const [langselect, setLangselect] = useState("en");

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangselect(lang);
  }

  return (
    <Router>
      <NavBar />
      <div className={"btn-lang"}>
        <p onClick={() => handleLanguage("en")} className={langselect === "en"?"active-link":""}>En</p>
        <p onClick={() => handleLanguage("es")} className={langselect === "es"?"active-link":""}>Es</p>
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

export default App;
