import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "contexts/Provider";
import GlobalStyle from "utils/GlobalStyle";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
