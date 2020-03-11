import { Controller } from 'egg';
import { execFileSync } from 'child_process';
import * as util from 'util';
import { default as serviceEnum }  from '../serviceConfig/serviceEnum';

export default class ServiceUpgradeController extends Controller {

    /**
     * 升级
     * /service/type/upgrade?serviceName=manage_service&upgradePkg=PrivateCloud_NODE_ONLY_shanghailixiang_20200302154455_156436.tar.gz&serviceList=10.244.1.143
     */
    async upgrade() {
        let {serviceName, upgradePkg, serviceList} = this.ctx.query;
        serviceList = util.isString(serviceList) ? JSON.parse(serviceList) : serviceList;
        let serviceObj = serviceEnum[serviceName];
        let path = `../bin/upgrade/${serviceObj.type}Upgrade.sh`;
        serviceList.forEach((ip) => {
            let { user, passwd } = serviceObj.list[ip];
            console.log(`[ServiceUpgradeController] upgrade: ${path} ${ip} ${user} ${passwd} ${serviceName} ${upgradePkg}`);
            execFileSync(path, [ip, user, passwd, serviceName, upgradePkg]);
        })
        let ResultJSON = this.ctx.helper.util.returnjson;
        this.ctx.body = new ResultJSON().success();
    }

    
}