"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SteamWebApi_1 = require("../Lib/SteamWebApi");
const TestDefaults_1 = __importDefault(require("./TestDefaults"));
const SteamApiKeyIsNotValidError_1 = require("../Lib/Errors/SteamApiKeyIsNotValidError");
const NoProfileFoundError_1 = require("../Lib/Errors/GetUserSummeries/NoProfileFoundError");
describe('Player Summeries', function () {
    const api = new SteamWebApi_1.SteamWebApi();
    it('Should not fetchable without api key.', async () => {
        let fetchSuccess = false;
        let rightError = false;
        try {
            await api.GetOneProfile(TestDefaults_1.default.Steam.RobinWalkersSteamId);
            fetchSuccess = true;
        }
        catch (e) {
            rightError = e instanceof SteamApiKeyIsNotValidError_1.SteamApiKeyIsNotValidError;
        }
        expect(!fetchSuccess && rightError).toBe(true);
    });
    it('Should not fetch invalid steam profile.', async () => {
        let fetchSuccess = false;
        let rightError = false;
        try {
            await api.GetOneProfile(TestDefaults_1.default.Steam.RobinWalkersSteamId + '900', TestDefaults_1.default.Steam.ApiKey);
            fetchSuccess = true;
        }
        catch (e) {
            rightError = e instanceof NoProfileFoundError_1.NoProfileFoundError;
        }
        expect(!fetchSuccess && rightError).toBe(true);
    });
    it('Should fetch steam profile.', async () => {
        let fetchSuccess = false;
        try {
            const response = await api.GetOneProfile(TestDefaults_1.default.Steam.RobinWalkersSteamId, TestDefaults_1.default.Steam.ApiKey);
            if (response.SteamId === TestDefaults_1.default.Steam.RobinWalkersSteamId) {
                fetchSuccess = true;
            }
        }
        catch (e) { }
        expect(fetchSuccess).toBe(true);
    });
});
