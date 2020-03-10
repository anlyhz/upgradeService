import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);
  router.redirect('/', '/news');
  router.get('/news', controller.news.list);
  router.get('/news/item/:id', controller.news.detail);
  router.get('/news/user/:id', controller.news.user);

  router.get('/login', controller.login.check);

  let control:any = app.io.controller;
  io.route('disconnect', control.serviceInformation.disconnect);
  io.route('serviceInformation', control.serviceInformation.index);
};
