"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SteamApiKeyIsNotValidError_1 = require("./Errors/SteamApiKeyIsNotValidError");
class Utils {
    static ValidateApiKey(defaultApiKey, customApiKey) {
        let key = '';
        if (typeof customApiKey === 'undefined') {
            key = defaultApiKey;
        }
        else {
            key = customApiKey;
        }
        if (key === '') {
            throw new SteamApiKeyIsNotValidError_1.SteamApiKeyIsNotValidError();
        }
        return key;
    }
}
exports.Utils = Utils;
