import http from "utils/http";

export const login = () => http.get("/data.json");

export const logout = () =>
  http.get("/data.json").then(x => {
    localStorage.setItem("authenticated", false);
    return new Promise(function(resolve) {
      setTimeout(resolve.bind(null, { authenticated: false }), 3000);
    });
  });
