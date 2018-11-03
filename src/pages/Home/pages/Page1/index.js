import React from "react";
import { AppContext } from "contexts/Provider";
import Page1 from "./Page1";

export default props => (
  <AppContext.Consumer>
    {({
      services: {
        users: { fetchUsers }
      },
      state: { users }
    }) => <Page1 {...props} users={users} fetchUsers={fetchUsers} />}
  </AppContext.Consumer>
);
