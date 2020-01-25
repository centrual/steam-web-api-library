"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_error_1 = require("ts-error");
class SteamApiKeyIsNotValidError extends ts_error_1.ExtendableError {
    constructor(message) {
        super();
        let errorMessage = 'Steam api key is not valid!';
        if (typeof message !== 'undefined') {
            errorMessage = message;
        }
        this.message = errorMessage;
    }
}
exports.SteamApiKeyIsNotValidError = SteamApiKeyIsNotValidError;
