/**
 * @author lei wen peng
 * @description app class
 */
var Koa = require("koa");
var mongo = require("koa-mongo");
var mongoConfig = require("./config/mongo");
var serverConfig = require("./config/server");
var router = require("./route");
var logger = require("koa-logger");
var bodyParser = require("koa-body");
var server = new Koa();
/**
 * apply middleWares
 */
// server.use(mongo(mongoConfig));
server.use(logger());
server.use(bodyParser());
server.use(router.routes());
server.use(router.allowedMethods());
server.listen(serverConfig.port, function () {
    console.log("server at " + serverConfig.port);
});
