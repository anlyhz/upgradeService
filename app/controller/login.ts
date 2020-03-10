import { Controller } from 'egg';

export default class LoginController extends Controller {

    public async check() {
        const { ctx } = this;
        const { uname, pwd } = ctx.params;
        if (uname === 'admin' && pwd === 'admin@20105') {
            console.log('ok......................')
        } else {
            console.log('fail......................')
        }
    }
}