import http from "utils/http";

export const fetchUsers = () =>
  http.get("/api/protected").then(response => {
    return {
      users: response.message
    };
  });
