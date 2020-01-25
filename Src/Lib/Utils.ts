import {SteamApiKeyIsNotValidError} from "./Errors/SteamApiKeyIsNotValidError";

export class Utils {
  public static ValidateApiKey(defaultApiKey: string, customApiKey?: string): string {
    let key = '';

    if (typeof customApiKey === 'undefined') {
      key = defaultApiKey;
    } else {
      key = customApiKey;
    }

    if (key === '') {
      throw new SteamApiKeyIsNotValidError();
    }

    return key;
  }
}
