import {SteamWebApi} from "../Lib/SteamWebApi";
import TestDefaults from "./TestDefaults";
import {NoProfileFoundError} from "../Lib/Errors/GetUserSummeries/NoProfileFoundError";

describe('Player Summeries', function() {
  const api = new SteamWebApi({ApiKey: TestDefaults.Steam.ApiKey});

  it('Should not fetch invalid steam profile.', async () => {
    let fetchSuccess = false;
    let rightError = false;

    try {
      await api.GetOneProfile(TestDefaults.Steam.RobinWalkersSteamId + '900');
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
