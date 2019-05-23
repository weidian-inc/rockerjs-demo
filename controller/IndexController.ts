import { Logger } from "@rockerjs/common";
import { Controller, Get, Param, Request } from '@rockerjs/mvc';

@Controller("/")
export class IndexController {
    @Get({url: '/'})
    async index() {
        Logger.info('hello world');
        return 'hello world';
    }
}