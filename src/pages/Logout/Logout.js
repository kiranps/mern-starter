import React, { Component } from "react";
import { LogoutMessage } from "./Styled";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  componentDidMount = () => {
    this.props.logout();
  };

  render() {
    const { authenticated } = this.props;
    return authenticated ? (
      <LogoutMessage>Logging out in a few seconds</LogoutMessage>
    ) : (
      <Redirect to="/" />
    );
  }
}
