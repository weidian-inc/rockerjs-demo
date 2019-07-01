
import { Inject, Container } from "@rockerjs/mvc";
import { AppInfoDao } from "../repository/dao/App_info";
import HttpNpsRequest from "../interfaces/httpInterface";

export class MainService {
    @Inject
    db: AppInfoDao

    @Inject
    npsApi: HttpNpsRequest

    async sendMsgThenquery() {
        let result = await this.db.queryAll();
        return {
            result
        };
    }

    async requestNpsServer() {
        let result = await this.npsApi.queryCateInfo(`地瓜`, 50010566);
        return result;
    }
}
