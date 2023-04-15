const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blogModels");

require("dotenv").config();

const app = express();
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.render("index", { blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});

const DB_url = process.env.URL;
console.log(DB_url);
const PORT = process.env.PORT || 3000;
mongoose.connect(DB_url).then(() => {
  console.log("connected to db");
  app.listen(3000, () => {
    console.log("server is listening");
  });
});
