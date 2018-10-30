import React, { Component } from "react";
import services from "services";

export const AppContext = React.createContext();

export default class Provider extends Component {
  constructor(props) {
    super(props);

    this.services = this.proxyMethodCalls(services, this);
    this.state = {};
  }

  proxyMethodCalls = obj => {
    const that = this;
    const handler = {
      get(target, propKey) {
        if (typeof target[propKey] === "function") {
          const origMethod = target[propKey];
          return function(...args) {
            const result = origMethod.apply(this, args);
            result.then(x => {
              that.setState(x);
            });
            return result;
          };
        } else if (typeof target[propKey] === "object") {
          return new Proxy(target[propKey], handler);
        }
      }
    };
    return new Proxy(obj, handler);
  };

  state = {};

  render() {
    return (
      <AppContext.Provider value={{ ...this.services, ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
