const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://backend:8080/" }));
  app.use(proxy("/auth", { target: "http://backend:8080/" }));
};
