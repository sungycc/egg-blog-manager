'use strict';

const Service = require('egg').Service;
const ErrorCode = require('../utils/errorCode.js');

class UserService extends Service {
  async register() {
    const { ctx, app } = this;
    const { name, password, telephone, } = ctx.query;
    const result = await app.mysql.insert('users', {
      user_name: name,
      user_password: password,
      user_telephone: telephone,
    });
    if (result.affectedRows === 1) {
      return {
        ...ErrorCode['20000'],
        data: {
          id: result.insertId,
        },
      };
    }
    return 111;
  }
}

module.exports = UserService;
