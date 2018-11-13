import React, { Component } from "react";
import Modal from "components/Modal";

const confirm = Modal;

export default class Page1 extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        message from server {users}
        <button onClick={() => confirm({ title: "Do you Confirm ?" })}>
          open modal
        </button>
      </div>
    );
  }
}
