import React from "react";
import { AppContext } from "contexts/Provider";
import Login from "./Login";

export default props => (
  <AppContext.Consumer>
    {({ authentication: { login }, authenticated }) => (
      <Login {...props} login={login} authenticated={authenticated} />
    )}
  </AppContext.Consumer>
);
