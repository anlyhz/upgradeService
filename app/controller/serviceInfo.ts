import { Controller } from 'egg';

export default class ServiceInfoController extends Controller {

    /**
     * 服务版本信息
     */
    async versionInfo() {
        let ResultJSON = this.ctx.helper.util.returnjson;
        this.ctx.body = new ResultJSON().success();
    }
}