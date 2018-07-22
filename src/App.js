import React, { Component } from "react";
import Login from "pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
