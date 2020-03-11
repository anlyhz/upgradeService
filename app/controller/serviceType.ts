import { Controller } from 'egg';
import { default as serviceEnum }  from '../serviceConfig/serviceEnum';

export default class ServiceTypeController extends Controller {

    async list() {
        let serviceName = Object.keys(serviceEnum);
        let ResultJSON = this.ctx.helper.util.returnjson;
        this.ctx.body = new ResultJSON().success({serviceList: serviceName});
      }
}