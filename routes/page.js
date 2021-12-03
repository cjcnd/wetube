const express = require("express");
const { rule } = require("postcss");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.isLoggedIn = false;
  res.locals.videos = [];
  res.locals.subscribeList = [];
  res.locals.gotsubscribedList = [];
  next();
});

router.get("/", (req, res, next) => {
  res.render("main", { videos: {} });
});

router.get("/upload", (req, res, next) => {
  res.render("upload");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/join", (req, res, next) => {
  res.render("join");
});

module.exports = router;
