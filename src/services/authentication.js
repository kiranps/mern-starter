import http from "utils/http";

export const login = () => http.get("/data.json");
