import http from "utils/http";

export const login = data =>
  http.post("/api/login", data).then(response => {
    if (response.authenticated) {
      const { token } = response;
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token", token);
      return {
        authenticated: true,
        token
      };
    } else {
      return {
        authenticated: false
      };
    }
  });

export const logout = () =>
  http.get("/data.json").then(x => {
    localStorage.setItem("authenticated", false);
    return new Promise(function(resolve) {
      setTimeout(resolve.bind(null, { authenticated: false }), 3000);
    });
  });
