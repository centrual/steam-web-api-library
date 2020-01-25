"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_error_1 = require("ts-error");
class UnexceptedSteamServerError extends ts_error_1.ExtendableError {
    constructor(message) {
        super();
        let errorMessage = 'Steam service returned 500 error.';
        if (typeof message !== 'undefined') {
            errorMessage = message;
        }
        this.message = errorMessage;
    }
}
exports.UnexceptedSteamServerError = UnexceptedSteamServerError;
