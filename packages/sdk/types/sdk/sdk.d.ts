import { IEndpoints } from "../types";
declare class API {
    endpoints: IEndpoints;
    constructor();
    request(endpoint?: any): Promise<any>;
    auth(method?: string, options?: {}): void | Promise<any>;
}
declare const sdk: API;
export default sdk;
