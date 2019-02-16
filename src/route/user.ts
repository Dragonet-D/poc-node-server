/**
 * @author lei wen peng
 * @description auth user
 */
const koaBody = require("koa-body");

type create = (router: any, control: any) => void;
type del = (router: any, control: any) => void;
// type getUser = (router: any, control: any) => void;

interface UserInter {
  create: create;
  del: del;
  //   getUser: getUser;
}

class User implements UserInter {
  constructor(router: any, userControl: any) {
    this.del(router, userControl.del);
    // this.getUser(router);
    this.create(router, userControl.create);
  }
  del(router, control) {
    router.post("/del", koaBody(), (ctx, next) => {});
  }
  //   getUser(router) {
  //     router.post("/getUser", (ctx, next) => {});
  //   }
  create(router, control) {
    router.post("/create", koaBody(), async (ctx, next) => {});
  }
}

module.exports = User;
