import { Rpc } from "@rockerjs/rpc-starter";
let { Resource } = Rpc.Module;

export default abstract class HttpNpsRequest {
    @Resource({ method: 'POST', baseUrl: "https://thor.weidian.com", url: '/faas/byd14.server0/1.0' })
    queryCateInfo(types: string, cateid: number): any {} // need auth, in cookie
}
