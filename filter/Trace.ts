import tracer from '@rockerjs/tracer';
import { Logger } from "@rockerjs/common";
import { Filter, AbstractFilter } from '@rockerjs/mvc';

@Filter
export class Trace extends AbstractFilter {
    init(args) {
        Logger.info('trace filter init' + JSON.stringify(args));
    }
    
    async doFilter(context, next) {
        await tracer()(context, next);
    }

    destroy() {
        Logger.info('trace filter destroy');
    }
}