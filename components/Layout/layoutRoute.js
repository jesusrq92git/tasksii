import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LayoutRoute = props => {
  const { component: Component, LoginReducer, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchProps =>
        LoginReducer.online ? (
          <Component {...matchProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  LoginReducer: state.LoginReducer
});

export default connect(
  mapStateToProps,
  null
)(LayoutRoute);
