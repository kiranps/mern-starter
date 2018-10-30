import http from "lib/http";

export const login = () => http.get("/data.json");
