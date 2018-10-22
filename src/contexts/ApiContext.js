import React, { Component } from "react";
import services from "../services";

export const ApiContext = React.createContext();

export default class ApiProvider extends Component {
  state = {};

  get http() {
    return services;
  }

  render() {
    return (
      <ApiContext.Provider value={services}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
