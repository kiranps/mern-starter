import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApiProvider from "contexts/ApiContext";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById("root")
);
registerServiceWorker();
