
import { Inject, Container } from "@rockerjs/mvc";
import { AppInfoDao } from "../repository/dao/App_info";
import HttpNpsRequest from "../interfaces/httpInterface";
// import { Redis } from "@rockerjs/redis-starter";
// import { Rocketmq } from "@rockerjs/rocketmq-starter";
// let { Message, getProducer } = Rocketmq.Module;
// const redisClient = Redis.Module.getClient();

export class MainService {
    @Inject
    db: AppInfoDao

    @Inject
    npsApi: HttpNpsRequest

    async sendMsgThenquery() {
        // const msg = new Message('rocker_mq', // topic
        //   'demo', // tag
        //   'starter test' // body
        // );

        // const sendResult = await getProducer().send(msg);
        
        let result = await this.db.queryByName('yangli');
        return {
            // sendResult,
            result,
        }
    }

    // async queryCache() {
    //     let ret = await redisClient.exec("keys",["vstudio:*"]);   
    //     return ret;
    // }

    async requestNpsServer() {
        let a = await this.npsApi.queryYourAppsInfo();
        return {
            a
        }
    }
}
