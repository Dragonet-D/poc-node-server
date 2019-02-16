/**
 * @author lei wen peng
 * @description auth user
 */

type login = (router: any, control: any) => void;
type logout = (router: any, control: any) => void;

interface AuthInter {
  login: login;
  logout: logout;
}

interface UserObj {
  username: string;
  password: string;
}

class Auth implements AuthInter {
  constructor(router: any, control: AuthInterface) {
    this.login(router, control);
    this.logout(router, control);
  }
  login(router, control) {
    router.post("/login", async (ctx, next) => {
      const requestBody = ctx.request.body;
      ctx.body = {
        status: {
          code: 200,
          message: "Login successfully"
        },
        Token: "auth-token{placeholder}",
        isValid: true
      };
    });
  }
  logout(router, control) {
    router.post("/logout", async (ctx, next) => {});
  }
}

module.exports = Auth;
