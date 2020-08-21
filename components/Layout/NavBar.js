import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { isOnlineAction, locationRoute } from "../../actions/login.action";
import { useTranslation } from 'react-i18next';

const NavBar = props => {

  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const handleLogout = () => {
    locationRoute("/add-boards");
    setExpanded(!expanded)
    props.isOnlineAction(false);
  };

  const wrapper = (route) => {
    locationRoute(route);
    setExpanded(!expanded)
  }

  const { LoginReducer, locationRoute } = props;

  return (
    <React.Fragment>
      {LoginReducer.online ? (
        <Navbar expanded={window.innerWidth <= "991" ? expanded : ""} expand="lg" className={"nav-style"}>
          <Navbar.Brand>
            TaskSii
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={
              () => setExpanded(!expanded)
            }
            aria-controls="basic-navbar-nav" 
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                onClick={
                  ()=>wrapper("/add-boards")
                }
                className={`nav-link ${
                  LoginReducer.location === "/add-boards" ? "active-link" : ""
                }`}
                to="/add-boards"
              >
                {t('add-board')}
              </Link>
              <Link 
                onClick={
                  ()=>wrapper("/boards")
                }
                className={`nav-link ${
                  LoginReducer.location === "/boards" ? "active-link" : ""
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
    isOnlineAction, locationRoute
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(NavBar);
