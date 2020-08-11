import React from "react";
import NavBar from "./components/Layout/NavBar";
import Login from "./components/Login/index";
import AddBoard from "./components/AddBoard/index";
import Boards from "./components/Boards/index";
import LayoutRoute from "./components/Layout/layoutRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
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
