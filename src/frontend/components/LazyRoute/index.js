import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "pages/Login/PrivateRoute";

export default function LazyRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<div>Loading...</div>}>
          {auth ? (
            <PrivateRoute {...props} component={Component} />
          ) : (
            <Component {...props} />
          )}
        </Suspense>
      )}
    />
  );
}
