const express = require("express");
const router = require("./router");
const session = require("express-session");
const cors = require("cors");

const { urlencoded } = require("body-parser");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
