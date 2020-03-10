import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    const {app, query} = this.ctx;
    // 给谁发, socket连接的id
    const id = query.id;
    const nsp:any = app.io.of('/');
    if(nsp.sockets[id]){
     // 通过id给指定socket连接发送消息
      nsp.sockets[id].emit('res', 'hello http....');
    }
    this.ctx.body = "发送成功";
  }
}