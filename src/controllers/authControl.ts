/**
 * @author lei wen peng
 * @description auth api control
 */

interface AuthInterface {
  login: () => {};
  logout: () => {};
}

class AuthControl {
  constructor(Models) {
    this.models = Models;
  }
  models = null;
  login(name, pwd) {}
  logout() {}
}

module.exports = AuthControl;
