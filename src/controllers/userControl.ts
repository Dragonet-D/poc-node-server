/**
 * @author lei wen peng
 * @description auth api control
 */

interface UserInterface {
  create: (ctx, param: object, next: Function) => void;
  del: (ctx, param: object, next: Function) => void;
}

class UserControl implements UserInterface {
  constructor(models) {
    this.models = models;
  }
  models: null;
  del(ctx, param, next) {}
  create(ctx, param, next) {}
}

module.exports = UserControl;
