import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.login.check);

  // 服务列表名称
  router.get('/service/type/list', controller.serviceType.list);
  // 升级
  router.get('/service/type/upgrade', controller.serviceUpgrade.upgrade);
  // 版本信息
  router.get('/service/type/info', controller.serviceInfo.versionInfo);

  let control:any = app.io.controller;
  io.route('disconnect', control.serviceInformation.disconnect);
  io.route('serviceInformation', control.serviceInformation.index);


};
