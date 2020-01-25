import { AxiosInstance } from "axios";
import { ISteamWebApiConfig } from "../Declarations/ISteamWebApiConfig";
import { IUserSummary } from "../Declarations/BeautifiedData/IUserSummary";
export declare class SteamWebApi {
    AxiosInstance: AxiosInstance;
    SteamApiKey: string;
    SteamApiBaseUrl: string;
    constructor(Options?: ISteamWebApiConfig);
    GetOneProfile(SteamId: string, ApiKey?: string): Promise<IUserSummary>;
}
//# sourceMappingURL=SteamWebApi.d.ts.map