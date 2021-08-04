'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/user',controller.user.index);
  router.get('/getId/:id',controller.user.getId);
  router.post('/addPost', controller.user.addPost);
  router.post('/getName', controller.user.getName);
  router.get('/home', controller.home.home);
  router.get('/list',controller.home.list);
  router.post('/addList', controller.home.addList);
  router.post('/editList', controller.home.editList);
  router.post('/deleteList', controller.home.deleteList);
  router.get('/getDetail/:id', controller.home.getDetailById);
};
