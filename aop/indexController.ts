// AOP使用文档请查阅 https://rockerjs.weidian.com/rockerjs/core.html#%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B-aop
import { Aspect, Pointcut, Before, After, Around } from "@rockerjs/core";
import { Logger } from "@rockerjs/common";
import { IndexController } from "../controller/IndexController";
import { App } from "../index";

@Aspect
class ASLogger {
  // 必须在静态方法上注册切点
  @Pointcut({
    clazz: IndexController, // 定位被修饰的类
    rules: ".*index.*", // 通过正则匹配到对应的方法，不填则匹配所有函数
    advices: ["around", "after"] // 过滤将要执行的钩子 (可细致到函数名)
  })
  static controller() {}

  @Pointcut({
    clazz: App, // 定位被修饰的类
    scope: "static",
    rules: ".*main.*", // 通过正则匹配到对应的方法，不填则匹配所有函数
    advices: ["after"] // 过滤将要执行的钩子 (可细致到函数名)
  })
  static main() {}

  // 在执行被打点方法前执行的方法
  @Around
  printExetime(ctx, method) {
    const d = Date.now();
    Logger.info("log:start: " + new Date());
    return method().then((result) => {
      Logger.info("log:result: " + result);
      Logger.info("log:exetime: " + (Date.now() - d)/1000);
      return result;
    });
  }

  // 在执行被打点方法后执行的方法
  @After
  printEnd() {
    Logger.info("log:end: " + new Date());
  }
}