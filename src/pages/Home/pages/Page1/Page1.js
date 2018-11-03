import React, { Component } from "react";

export default class Page1 extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  render() {
    const { users } = this.props;

    return <div>message from server {users}</div>;
  }
}
