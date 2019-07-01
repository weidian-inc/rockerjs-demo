import { Logger } from "@rockerjs/common";
import { Controller, Get, Param, Request } from '@rockerjs/mvc';

@Controller("/")
export class IndexController {
    @Get({url: '/', render: '../view/index/index.ejs'})
    async index() {
        Logger.info('hello world');
        return {
            message: 'hello world'
        };
    }
}