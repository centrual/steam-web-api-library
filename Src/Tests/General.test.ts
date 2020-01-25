import {SteamWebApi} from "../Lib/SteamWebApi";
import TestDefaults from "./TestDefaults";
import {Utils} from "../Lib/Utils";

describe('Steam Web Api Initialization', function() {
  const apiWithKey = new SteamWebApi({ApiKey: TestDefaults.Steam.ApiKey});

  it('Should API key of instance set', () => {
    expect(apiWithKey.SteamApiKey).toBe(TestDefaults.Steam.ApiKey);
  });

  it('Should return custom API key.', function () {
    const customApiKey = '1';
    let apiKey = '';

    try {
      apiKey = Utils.ValidateApiKey(apiWithKey.SteamApiKey, customApiKey);
    } catch(e) {}

    expect(apiKey).toBe(customApiKey);
  });

  it('Should return default API key.', function () {
    let apiKey = '';

    try {
      apiKey = Utils.ValidateApiKey(apiWithKey.SteamApiKey);
    } catch(e) {}

    expect(apiKey).toBe(TestDefaults.Steam.ApiKey);
  });
});
