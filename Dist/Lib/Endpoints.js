"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LengthOfSteamIdListCanNotBeExceedAHundredError_1 = require("./Errors/GetUserSummeries/LengthOfSteamIdListCanNotBeExceedAHundredError");
const LengthOfSteamIdListCanNotBeZeroError_1 = require("./Errors/GetUserSummeries/LengthOfSteamIdListCanNotBeZeroError");
exports.Endpoints = {
    GetPlayerSummaries: (Key, SteamIds) => {
        if (SteamIds.length === 0) {
            throw new LengthOfSteamIdListCanNotBeZeroError_1.LengthOfSteamIdListCanNotBeZeroError();
        }
        if (SteamIds.length > 100) {
            throw new LengthOfSteamIdListCanNotBeExceedAHundredError_1.LengthOfSteamIdListCanNotBeExceedAHundredError();
        }
        return `/ISteamUser/GetPlayerSummaries/v0002/?key=${Key}&steamIds=${SteamIds.join(',')}`;
    }
};
