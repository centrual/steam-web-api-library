"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_error_1 = require("ts-error");
class LengthOfSteamIdListCanNotBeZeroError extends ts_error_1.ExtendableError {
    constructor(message) {
        super();
        let errorMessage = 'The length of steam id list can no be zero.';
        if (typeof message !== 'undefined') {
            errorMessage = message;
        }
        this.message = errorMessage;
    }
}
exports.LengthOfSteamIdListCanNotBeZeroError = LengthOfSteamIdListCanNotBeZeroError;
