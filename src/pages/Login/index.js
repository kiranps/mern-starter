import React from "react";
import { ApiContext } from "contexts/ApiContext";
import Login from "./Login";

export default props => (
  <ApiContext.Consumer>
    {({ authentication: { authenticate } }) => (
      <Login {...props} authenticate={authenticate} />
    )}
  </ApiContext.Consumer>
);
