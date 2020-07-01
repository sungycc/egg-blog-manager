'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    let result = await this.service.user.register();
    const token = app.jwt.sign({
      nickname: ctx.query.name,
    }, app.config.jwt.secret);
    ctx.body;
    result.data.token = token;
    console.log(ctx.body);
    this.ctx.body = result;
  }
}

module.exports = UserController;
