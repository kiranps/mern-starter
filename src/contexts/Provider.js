import React, { Component } from "react";
import services from "services";

export const AppContext = React.createContext();

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.services = this.proxyMethodCalls(services, this);
    this.state = {
      authenticated: localStorage.getItem("authenticated") === "true"
    };
  }

  proxyMethodCalls = obj => {
    const that = this;

    const handler = {
      get(target, propKey) {
        const propValue = target[propKey];
        if (typeof propValue === "object") {
          return new Proxy(propValue, handler);
        } else if (typeof propValue === "function") {
          return function() {
            const result = propValue.apply(this, arguments);
            result.then(x => {
              that.setState(x);
            });
            return result;
          };
        } else {
          return propValue;
        }
      }
    };

    return new Proxy(obj, handler);
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.services, ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
