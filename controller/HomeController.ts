import { Inject } from '@rockerjs/core';
import { Logger } from "@rockerjs/common";
import { Controller, Get, Param, Request } from '@rockerjs/mvc';
import { MainService } from '../service/main';

@Controller("/home")
export class HomeController {
    @Inject
    mainService: MainService;

    @Get({url: '/'})
    async home(@Param("name") name: string, @Param("person") person: object) {
        let a = await this.mainService.sendMsgThenquery();
        // let b = await this.mainService.queryCache();
        Logger.info('hehe');
        return {
            tag: 'hello world',
            a,
            // b,
            name,
            person
        }
    }

    @Get({url: '/queryAppInfo'})
    async queryAppInfo(@Request req) {
        let ret = await this.mainService.requestNpsServer();
        return ret;
    }

    @Get({url: '/error'})
    async error(@Param("name") name: string, @Param("person") person: object) {
        throw new Error('test errorprocessor')
    }

}