import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { isOnlineAction } from "../../actions/login.action";

const NavBar = props => {
  const [location, setLocation] = useState("/add-boards");

  const handleLocation = route => {
    setLocation(route);
  };

  const handleLogout = () => {
    props.isOnlineAction(false);
  };

  return (
    <React.Fragment>
      {props.LoginReducer.online ? (
        <Navbar className={"navbar nav-style"}>
          <Link
            onClick={() => handleLocation("/add-boards")}
            className={`nav-link ${
              location === "/add-boards" ? "active-link" : ""
            }`}
            to="/add-boards"
          >
            Add Board
          </Link>
          <Link
            onClick={() => handleLocation("/boards")}
            className={`nav-link ${
              location === "/boards" ? "active-link" : ""
            }`}
            to="/boards"
          >
            My Boards
          </Link>
          <Link
            className={"nav-link right"}
            to=""
            onClick={() => handleLogout()}
          >
            Logout
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
