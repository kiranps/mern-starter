import React, { Component } from "react";
import { LogoutMessage } from "./Styled";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  componentDidMount = () => {
    this.props.logout();
  };

  render() {
    const { authenticated } = this.props;
    console.log(authenticated);
    return authenticated ? (
      <LogoutMessage>Logging out</LogoutMessage>
    ) : (
      <Redirect to="/" />
    );
  }
}
