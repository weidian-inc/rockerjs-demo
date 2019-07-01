import * as path from "path";
import { Logger } from "@rockerjs/common";
import { Application, AbstractApplication } from "@rockerjs/mvc";

@Application
export class App extends AbstractApplication{
    public async beforeServerStart(server, args) {
        Logger.info('beforeServerStart hook');
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
                Logger.error("service error", error);
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
        // do some jobs
    }
}


