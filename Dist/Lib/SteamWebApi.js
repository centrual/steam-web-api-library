"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Utils_1 = require("./Utils");
const Endpoints_1 = require("./Endpoints");
const UserSummariesEnums_1 = require("../Declarations/Shared/UserSummariesEnums");
const UnexceptedSteamServerError_1 = require("./Errors/UnexceptedSteamServerError");
const NoProfileFoundError_1 = require("./Errors/GetUserSummeries/NoProfileFoundError");
const Defaults_1 = require("./Defaults");
class SteamWebApi {
    constructor(Options) {
        this.SteamApiKey = '';
        this.SteamApiBaseUrl = Defaults_1.Defaults.SteamApi.BaseUrl;
        if (typeof Options !== 'undefined') {
            if (typeof Options.ApiKey !== 'undefined') {
                this.SteamApiKey = Options.ApiKey;
            }
            if (typeof Options.SteamApiBaseUrl !== 'undefined') {
                this.SteamApiBaseUrl = Options.SteamApiBaseUrl;
            }
        }
        this.AxiosInstance = axios_1.default.create({
            baseURL: this.SteamApiBaseUrl
        });
    }
    async GetOneProfile(SteamId, ApiKey) {
        const ValidatedApiKey = Utils_1.Utils.ValidateApiKey(this.SteamApiKey, ApiKey);
        const Url = Endpoints_1.Endpoints.GetPlayerSummaries(ValidatedApiKey, [SteamId]);
        const Response = await this.AxiosInstance.get(Url);
        if (Response.status === 404 || (Response.status === 200 && Response.data.response.players.length < 1)) {
            throw new NoProfileFoundError_1.NoProfileFoundError();
        }
        else if (Response.status === 500) {
            throw new UnexceptedSteamServerError_1.UnexceptedSteamServerError();
        }
        const Player = Response.data.response.players.find(item => item.steamid === SteamId);
        if (typeof Player === 'undefined') {
            throw new NoProfileFoundError_1.NoProfileFoundError();
        }
        const HaveLocationInfo = [Player.loccityid, Player.locstatecode, Player.loccountrycode].some(item => typeof item !== 'undefined');
        const AllowingPublicComments = Player.commentpermission === 1;
        let IsPlayingAnyGame = UserSummariesEnums_1.EnumUnknownYesNo.Unknown;
        if (typeof Player.gameid !== 'undefined') {
            IsPlayingAnyGame = Player.gameid > 0 ? UserSummariesEnums_1.EnumUnknownYesNo.Yes : UserSummariesEnums_1.EnumUnknownYesNo.No;
        }
        return {
            HaveLocationInfo,
            AllowingPublicComments,
            IsPlayingAnyGame,
            CommunityVisibilityState: Player.communityvisibilitystate,
            LastLogoff: Player.lastlogoff,
            PrimaryClanId: Player.primaryclanid,
            TimeCreated: Player.timecreated,
            SteamId: Player.steamid,
            RealName: Player.realname,
            ProfileUrl: Player.profileurl,
            ProfileState: Player.profilestate,
            PersonaName: Player.personaname,
            PersonaState: Player.personastate,
            Avatars: {
                Small: Player.avatar,
                Medium: Player.avatarmedium,
                Full: Player.avatarfull
            },
            CurrentlyPlaying: {
                GameId: Player.gameid,
                GameName: Player.gameextrainfo,
                GameServerIp: Player.gameserverip
            },
            Location: {
                CityId: Player.loccityid,
                CountryCode: Player.loccountrycode,
                StateCode: Player.locstatecode
            }
        };
    }
}
exports.SteamWebApi = SteamWebApi;
