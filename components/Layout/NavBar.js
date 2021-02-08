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
            <Form className={"center"}>
              <p className={"p-username icon-user"}>
                <svg className={"icon-user"} width="25px" height="25px" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                  <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>
              </p>
              <p className={"p-username"}>
                {LoginReducer.lastUser}
              </p>
              <Link
                className={"nav-link"}
                to=""
                onClick={handleLogout}
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
