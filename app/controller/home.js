'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test(){
    const { ctx } = this;
    ctx.body = '测试接口';
  }
  async home () {
    const { ctx } = this;
    await ctx.render('index.html', {
      title:'我是首页'
    })
  }
  async list () {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
    if(result){
      ctx.body = {
        status:200,
        data:result,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取结果失败～！',
      }
    }
  }
  async addList (){
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    }
    const result = await ctx.service.diary.addList(params);
    console.info(result,"=====")
    if(result){
      ctx.body = {
        status:200,
        data: result,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加内容失败～！',
      }
    }
  }
  async editList () {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    }
    const result = await ctx.service.diary.editList(params);
    if(result){
      ctx.body = {
        status:200,
        data: result,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑内容失败～！',
      }
    }
  }
  async deleteList() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.diary.deleteList(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除失败～！',
      };
    }
  }
  async getDetailById (){
    const { ctx } = this;
    console.info('ctx', ctx.params);
    const result = await ctx.service.diary.getDetail(ctx.params.id);
    if(result){
      ctx.body = {
        status:200,
        data:result,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取详情失败～！',
      }
    }
  }
}

module.exports = HomeController;
