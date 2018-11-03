import http from "utils/http";

export const fetchUsers = () =>
  http.get("http://localhost:8080/protected").then(response => {
    return {
      users: response.message
    };
  });
