import { Inject } from '@rockerjs/core';
import { Logger } from "@rockerjs/common";
import { Controller, Get, Param, Request } from '@rockerjs/mvc';
import { MainService } from '../service/main';

@Controller("/home")
export class HomeController {
    @Inject
    mainService: MainService;

    @Get({url: '/queryDb'})
    async home(@Param("name") name: string, @Param("person") person: object) {
        Logger.info('query db...');
        let result = await this.mainService.sendMsgThenquery();
        return {
            tag: 'hello world',
            result,
            name,
            person
        };
    }

    @Get({url: '/queryCateInfo'})
    async queryCateInfo() {
        let ret = await this.mainService.requestNpsServer();
        return ret;
    }

    @Get({url: '/error'})
    async error() {
        throw new Error('test errorprocessor');
    }
}