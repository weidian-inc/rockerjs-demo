/// shadow
import { login } from '@vdian/rocker-wdr';
import { Filter, AbstractFilter } from '@rockerjs/mvc';

let pattern = null;

@Filter
export class Wdr extends AbstractFilter {
    
    init(args: string[]) {
        pattern = args[0];
        console.log('wdr filter init', args);
    }

    // koa context, this === context
    async doFilter(context, next) {
        await login({ // 前置过滤
            ignore: new RegExp(pattern, 'i')///(uploadProfile)|(\/build\/\d+\/)\S+/i
        })(context, next)
    }

    destroy() {
        console.log('wdr filter destroy')
    }
}