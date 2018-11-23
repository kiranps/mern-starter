const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const app = express();
require("dotenv").load();

const jwtStrategry = require("./strategies/jwt");
const googleStrategry = require("./strategies/google");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

passport.use(jwtStrategry);
passport.use(googleStrategry);

app.use("/", express.static(path.resolve(__dirname, "public")));

app.get("/test", function(req, res) {
  return res.send("hello");
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username, password);
  if (username === "admin@example.com") {
    if (password === "pass") {
      const opts = {};
      opts.expiresIn = 5000;
      const secret = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ username }, secret, opts);
      return res.status(200).json({
        message: "Auth Passed",
        authenticated: true,
        token
      });
    }
  }
  return res.status(401).json({ authenticated: false, message: "Auth Failed" });
});

app.get(
  "/api/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.status(200).json({ message: "YAY! this is a protected Route" });
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    session: false,
    scope: ["email"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  function(req, res) {
    console.log("hello kiran");
    console.log(req.user.emails);
    const profileId = req.user.id;
    res.type("html");
    res.send(`
    <html>
    <body>
    <script>
      console.log(${profileId})
      window.opener.authenticateCallback(${profileId});
      window.close();
    </script>
    </body>
    </html>
    `);
  }
);

app.listen(process.env.PORT || 8080);
console.log("app started at ", 8080);
