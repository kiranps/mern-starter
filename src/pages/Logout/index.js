import React from "react";
import { AppContext } from "contexts/Provider";
import Logout from "./Logout";

export default props => (
  <AppContext.Consumer>
    {({ authentication: { logout }, authenticated }) => (
      <Logout {...props} authenticated={authenticated} logout={logout} />
    )}
  </AppContext.Consumer>
);
