import {EnumCommunityVisibilityState, EnumPersonaState} from "../Shared/UserSummariesEnums";

export interface ISteamUserResponseOneUser {
  "steamid": string,
  "personaname": string,
  "profileurl": string,
  "avatar": string,
  "avatarmedium": string,
  "avatarfull": string,
  "personastate": EnumPersonaState,
  "communityvisibilitystate": EnumCommunityVisibilityState,
  "profilestate"?: 1,
  "lastlogoff": number,
  commentpermission?: 1,
  "personastateflags"?: 0,

  "realname"?: string,
  "primaryclanid"?: string,
  "timecreated"?: number,
  "loccountrycode"?: string,
  "locstatecode"?: string,
  "loccityid"?: number,
  gameid?: number
  gameserverip?: string
  gameextrainfo?: string,
}

export interface ISteamResponseUserSummaries {
  "response": {
    "players": Array<ISteamUserResponseOneUser>
  }
}
