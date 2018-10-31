import React, { Component, Fragment, lazy } from "react";
import { HashRouter as Router } from "react-router-dom";
import LazyRoute from "components/LazyRoute";

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
const Page1 = lazy(() => import("pages/Page1"));
const Page2 = lazy(() => import("pages/Page2"));
const Page3 = lazy(() => import("pages/Page3"));

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LazyRoute exact path="/" component={Login} />
          <LazyRoute auth path="/h" component={Home} />
          <LazyRoute exact path="/login" component={Login} />
          <LazyRoute auth path="/page1" component={Page1} />
          <LazyRoute exact path="/page2" component={Page2} />
          <LazyRoute auth exact path="/page3" component={Page3} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
