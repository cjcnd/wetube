const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.videos = [];
  res.locals.subscribeList = [];
  res.locals.gotsubscribedList = [];
  next();
});
