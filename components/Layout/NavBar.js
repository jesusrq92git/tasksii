import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { isOnlineAction } from "../../actions/login.action";
import { useTranslation } from 'react-i18next';

const NavBar = props => {
  const { t } = useTranslation();

  const [location, setLocation] = useState("/add-boards");

  const handleLocation = route => {
    setLocation(route);
  };

  const handleLogout = () => {
    setLocation("/add-boards");
    props.isOnlineAction(false);
  };

  const { LoginReducer } = props;

  return (
    <React.Fragment>
      {LoginReducer.online ? (
        <Navbar className={"navbar nav-style"}>
          <Link
            onClick={() => handleLocation("/add-boards")}
            className={`nav-link ${
              location === "/add-boards" ? "active-link" : ""
            }`}
            to="/add-boards"
          >
            {t('add-board')}
          </Link>
          <Link
            onClick={() => handleLocation("/boards")}
            className={`nav-link ${
              location === "/boards" ? "active-link" : ""
            }`}
            to="/boards"
          >
            {t('my-boards')}
          </Link>
          <Link
            className={"nav-link right"}
            to=""
            onClick={() => handleLogout()}
          >
            {t('logout')}
          </Link>
        </Navbar>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  LoginReducer: state.LoginReducer
});

const mapDispatchToProps = () => {
  return {
    isOnlineAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(NavBar);
