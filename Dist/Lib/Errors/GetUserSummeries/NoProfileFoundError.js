"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_error_1 = require("ts-error");
class NoProfileFoundError extends ts_error_1.ExtendableError {
    constructor(message) {
        super();
        let errorMessage = 'There is no profiles linked with steam ids.';
        if (typeof message !== 'undefined') {
            errorMessage = message;
        }
        this.message = errorMessage;
    }
}
exports.NoProfileFoundError = NoProfileFoundError;
