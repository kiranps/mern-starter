import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "contexts/Provider";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <AppContext.Consumer>
      {({ state: { authenticated } }) => (
        <Route
          {...rest}
          render={props =>
            authenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      )}
    </AppContext.Consumer>
  );
}

export default PrivateRoute;
