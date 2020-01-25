import {EnumCommunityVisibilityState, EnumPersonaState, EnumProfileState, EnumUnknownYesNo} from "../Shared/UserSummariesEnums";

export interface IUserSummary {
  SteamId: string,
  PersonaName: string,
  ProfileUrl: string,
  LastLogoff: number,

  AllowingPublicComments: boolean,
  HaveLocationInfo: boolean,
  IsPlayingAnyGame: EnumUnknownYesNo,

  CommunityVisibilityState: EnumCommunityVisibilityState,
  PersonaState: EnumPersonaState,
  ProfileState: EnumProfileState,

  RealName?: string,
  PrimaryClanId?: string,
  TimeCreated?: number,

  Avatars: {
    Small: string,
    Medium: string,
    Full: string
  },
  CurrentlyPlaying: {
    GameServerIp?: string,
    GameId?: number,
    GameName?: string,
  }
  Location?: {
    CityId?: number,
    StateCode?: number,
    CountryCode?: string
  }
}
