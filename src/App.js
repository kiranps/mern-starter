import React, { Component, Fragment } from "react";
import Login from "pages/Login";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";
import PrivateRoute from "pages/Login/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
