import {LengthOfSteamIdListCanNotBeExceedAHundredError} from "./Errors/GetUserSummeries/LengthOfSteamIdListCanNotBeExceedAHundredError";
import {LengthOfSteamIdListCanNotBeZeroError} from "./Errors/GetUserSummeries/LengthOfSteamIdListCanNotBeZeroError";

export const Endpoints = {
  GetPlayerSummaries: (Key: string, SteamIds: Array<string>): string => {
    if( SteamIds.length === 0 ) {
      throw new LengthOfSteamIdListCanNotBeZeroError();
    }

    if( SteamIds.length > 100 ) {
      throw new LengthOfSteamIdListCanNotBeExceedAHundredError();
    }

    return `/ISteamUser/GetPlayerSummaries/v0002/?key=${Key}&steamIds=${SteamIds.join(',')}`;
  }
};
