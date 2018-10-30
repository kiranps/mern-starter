import React, { Component } from "react";
import services from "../services";

export const ApiContext = React.createContext();

export default class ApiProvider extends Component {
  state = {};

  middleware = () => {};

  render() {
    return (
      <ApiContext.Provider value={services}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
