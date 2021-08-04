'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	async user () {
		return {
			title:'|||',
			content:'我是你二哥'
		};
	}
}

module.exports = UserService;
