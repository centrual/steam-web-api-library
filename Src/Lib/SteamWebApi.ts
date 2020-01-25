import Axios, {AxiosInstance} from "axios";
import {ISteamWebApiConfig} from "../Declarations/ISteamWebApiConfig";
import {Utils} from "./Utils";
import {ISteamResponseUserSummaries} from "../Declarations/SteamApiMethods/ISteamResponseUserSummaries";
import {Endpoints} from "./Endpoints";
import {IUserSummary} from "../Declarations/BeautifiedData/IUserSummary";
import {EnumUnknownYesNo} from "../Declarations/Shared/UserSummariesEnums";
import {UnexceptedSteamServerError} from "./Errors/UnexceptedSteamServerError";
import {NoProfileFoundError} from "./Errors/GetUserSummeries/NoProfileFoundError";
import {Defaults} from "./Defaults";

export class SteamWebApi {
  public AxiosInstance: AxiosInstance;
  public SteamApiKey: string;
  public SteamApiBaseUrl: string;

  constructor(Options?: ISteamWebApiConfig) {
    this.SteamApiKey = '';
    this.SteamApiBaseUrl = Defaults.SteamApi.BaseUrl;

    if( typeof Options !== 'undefined' ) {
      if (typeof Options.ApiKey !== 'undefined') {
        this.SteamApiKey = Options.ApiKey;
      }

      if (typeof Options.SteamApiBaseUrl !== 'undefined') {
        this.SteamApiBaseUrl = Options.SteamApiBaseUrl;
      }
    }

    this.AxiosInstance = Axios.create({
      baseURL: this.SteamApiBaseUrl
    });
  }

  public async GetOneProfile( SteamId: string, ApiKey?: string ): Promise<IUserSummary> {
    const ValidatedApiKey = Utils.ValidateApiKey(this.SteamApiKey, ApiKey);

    const Url = Endpoints.GetPlayerSummaries(ValidatedApiKey, [SteamId]);
    const Response = await this.AxiosInstance.get<ISteamResponseUserSummaries>(Url);

    if (Response.status === 404 || (Response.status === 200 && Response.data.response.players.length < 1)) {
      throw new NoProfileFoundError();
    } else if( Response.status === 500 ) {
      throw new UnexceptedSteamServerError();
    }

    const Player = Response.data.response.players.find(item => item.steamid === SteamId);

    if (typeof Player === 'undefined') {
      throw new NoProfileFoundError();
    }

    const HaveLocationInfo = [Player.loccityid, Player.locstatecode, Player.loccountrycode].some(item => typeof item !== 'undefined');
    const AllowingPublicComments = Player.commentpermission === 1;
    let IsPlayingAnyGame = EnumUnknownYesNo.Unknown;

    if (typeof Player.gameid !== 'undefined') {
      IsPlayingAnyGame = Player.gameid > 0 ? EnumUnknownYesNo.Yes : EnumUnknownYesNo.No;
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
    } as IUserSummary;
  }
}
