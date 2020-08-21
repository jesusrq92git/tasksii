import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
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
        <Navbar expand="lg" className={"nav-style"}>
          <Navbar.Brand href={"/"}>TaskSii</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
            </Nav>
            <Form>
              <Link
                className={"nav-link"}
                to=""
                onClick={() => handleLogout()}
              >
                {t('logout')}
              </Link>
            </Form>
          </Navbar.Collapse>
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
