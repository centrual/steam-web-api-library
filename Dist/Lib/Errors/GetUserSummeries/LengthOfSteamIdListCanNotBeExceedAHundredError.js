"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_error_1 = require("ts-error");
class LengthOfSteamIdListCanNotBeExceedAHundredError extends ts_error_1.ExtendableError {
    constructor(message) {
        super();
        let errorMessage = 'Length of steam id list can not be exceed a hundred.';
        if (typeof message !== 'undefined') {
            errorMessage = message;
        }
        this.message = errorMessage;
    }
}
exports.LengthOfSteamIdListCanNotBeExceedAHundredError = LengthOfSteamIdListCanNotBeExceedAHundredError;
