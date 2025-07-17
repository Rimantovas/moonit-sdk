"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const BaseApiClient_1 = require("./BaseApiClient");
const utils_1 = require("./utils");
class ApiClient extends BaseApiClient_1.BaseApiClient {
    constructor(options) {
        super();
        this.authedRequest = (endpoint, token, options = {}, shouldParseJSON = true) => (0, utils_1.authedRequest)(this.apiBasePath, endpoint, token, options, shouldParseJSON);
        this.publicRequest = (endpoint, options = {}, shouldParseJSON = true) => (0, utils_1.publicRequest)(this.apiBasePath, endpoint, options, shouldParseJSON);
        this.apiBasePath = options.apiBasePath;
    }
}
exports.ApiClient = ApiClient;
