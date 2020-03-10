import { Controller } from 'egg';

export default class serviceInformationController extends Controller {
    async index(){
         const {app, socket} = this.ctx;
         const params = this.ctx.args;
         console.log(`[serviceInformationController] args:${params}`);
         const id = socket.id;
         const nsp:any = app.io.of('/');
         // 根据id给指定连接发送消息
         nsp.sockets[id].emit('res', `revice you msg: ${params}`);
         // 断开连接
        //  this.ctx.socket.disconnect();
    }

    async disconnect() {
        const message = this.ctx.args[0];
        console.log(`serviceInformationController disconnect ${message}`);
    }
}