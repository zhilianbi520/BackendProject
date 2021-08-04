'use strict';

const Service = require('egg').Service;


class DiaryService extends Service {
	async list () {
		const { app } = this;
		try {
			const result = await app.mysql.select('diary');
			return result;
		} catch (err) {
			console.log(err);
			return  null;
		}
	}
	async addList (params) {
		const { app } = this;
		try {
			const result = await app.mysql.insert('diary', params);
			return result;
		}catch (err){
			console.log(err);
			return null;
		}
	}
	async editList (params) {
		const { app } = this;
		try {
			const result = await app.mysql.update('diary', params);
			return result;
		} catch (err){
			console.log(err);
			return null;
		}
	}
	async deleteList(id) {
		const { app } = this;
		try {
			const result = await app.mysql.delete('diary', { id });
			return result;
		} catch (error) {
			console.log(error);
			return null;
		}
	}
	async getDetail (id) {
		const { app } = this;
		if(!id){
			console.info('id不能为空～！')
			return null;
		}
		try {
			const  result = await app.mysql.select('diary', {
				where: {
					id,
				}
			})
			return result;
		} catch (err){
			console.log(err);
			return null;
		}
	}
}
module.exports = DiaryService;
