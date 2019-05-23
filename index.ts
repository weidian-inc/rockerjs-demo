import * as path from "path";
// import "@rockerjs/midlog";
import { Logger } from "@rockerjs/common";
import { Application, AbstractApplication } from "@rockerjs/mvc";
// import { Rocketmq } from "@rockerjs/rocketmq-starter";

@Application
export class App extends AbstractApplication{
    public async beforeServerStart(server, args) {
        console.log('beforeServerStart hook', server, args);
        server.config({
            assets: {
                '/assets': {
                    folder: path.join(__dirname, 'assets'),
                    cache: 'Etag'
                },
                '/favicon.ico': {
                    folder: path.join(__dirname, 'assets')
                }
            },
            errorProcessor: error => {
                console.error("service error", error);
                return {
                    status: {
                        code: error.code == undefined ? 1 : error.code, 
                        message: error.message
                    }
                };
            }
        });
    }

    public static async main(args) {
        Logger.info('main bussiness ' + JSON.stringify(args));

        //  let { getConsumer } = Rocketmq.Module;
        // consumer message
        // mq为broker的读写队列信息；pg为队列里消息信息
        // const consumer = getConsumer();
        // consumer.subscribe(/*订阅消息的topic*/'rocker_mq', /*需要过滤的tag*/'*', async function(msg,mq,pg) {
        //     console.log(`开始消费消息, msgId: ${msg.msgId}, body: ${msg.body.toString()}`);
        // });
        
        // // 错误处理函数
        // consumer.on('error', err => {
        //     console.error('consumer error', err);
        // }); 
    }
}


