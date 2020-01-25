import {SteamWebApi} from "../Lib/SteamWebApi";
import TestDefaults from "./TestDefaults";
import {SteamApiKeyIsNotValidError} from "../Lib/Errors/SteamApiKeyIsNotValidError";
import {NoProfileFoundError} from "../Lib/Errors/GetUserSummeries/NoProfileFoundError";

describe('Player Summeries', function() {
  const api = new SteamWebApi();

  it('Should not fetchable without api key.', async () => {
    let fetchSuccess = false;
    let rightError = false;

    try {
      await api.GetOneProfile(TestDefaults.Steam.RobinWalkersSteamId);
      fetchSuccess = true;
    } catch(e) {
      rightError = e instanceof SteamApiKeyIsNotValidError;
    }

    expect(!fetchSuccess && rightError).toBe(true);
  });

  it('Should not fetch invalid steam profile.', async () => {
    let fetchSuccess = false;
    let rightError = false;

    try {
      await api.GetOneProfile(TestDefaults.Steam.RobinWalkersSteamId + '900', TestDefaults.Steam.ApiKey);
      fetchSuccess = true;
    } catch(e) {
      rightError = e instanceof NoProfileFoundError;
    }

    expect(!fetchSuccess && rightError).toBe(true);
  });

  it('Should fetch steam profile.', async () => {
    let fetchSuccess = false;

    try {
      const response = await api.GetOneProfile(TestDefaults.Steam.RobinWalkersSteamId, TestDefaults.Steam.ApiKey);

      if( response.SteamId === TestDefaults.Steam.RobinWalkersSteamId ) {
        fetchSuccess = true;
      }
    } catch(e) {}

    expect(fetchSuccess).toBe(true);
  });
});
