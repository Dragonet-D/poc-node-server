/**
 * @author lei wen peng
 * @description app class
 */

const Koa = require("koa");
const mongo = require("koa-mongo");
const mongoConfig = require("./config/mongo");
const serverConfig = require("./config/server");
const router = require("./route");
const logger = require("koa-logger");
const bodyParser = require("koa-body");
const server = new Koa();

/**
 * apply middleWares
 */
server.use(mongo(mongoConfig));
server.use(logger());
server.use(bodyParser());
server.use(router.routes());
server.use(router.allowedMethods());

server.listen(serverConfig.port, () => {
  console.log(`server at ${serverConfig.port}`);
});
