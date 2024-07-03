const express = require("express");
const router = require("./router");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const { urlencoded } = require("body-parser");

const app = express();
app.use(express.json());


const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname,'css')))

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
  console.log("Server is running...///");
});
