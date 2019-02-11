/**
 * @author lei wen peng
 * @description export all routers
 */

// import koaRouter from "koa-router";
// import auth from "./auth";
// import user from "./user";
const KoaRouter = require("koa-router");
const mongoose = require("mongoose");
const { AuthControls, UserControls } = require("../controllers");
const { userSchema } = require("../models");
const Auth = require("./auth");
const User = require("./user");
const router = new KoaRouter();

mongoose.connect("mongodb://localhost:27017/local", {
  useNewUrlParser: true
});

const Models = { user: mongoose.model("Users", userSchema, "Users") };

new Auth(router, new AuthControls(Models));
new User(router, new UserControls(Models));

module.exports = router;
