"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRequest = exports.authedRequest = exports.request = void 0;
const axios_1 = __importStar(require("axios"));
const NoContent_1 = require("./NoContent");
const ResponseError_1 = require("./ResponseError");
const bearerAuth = (token) => {
    return token
        ? new axios_1.AxiosHeaders().set('Authorization', `Bearer ${token}`)
        : undefined;
};
const enhanceOptions = (options, token) => {
    if (options.headers == null) {
        options.headers = new axios_1.AxiosHeaders();
    }
    if (!options.headers.has('Content-Type')) {
        options.headers.set('Content-Type', 'application/json');
    }
    options.headers = options.headers.concat(bearerAuth(token));
    return options;
};
const parseJSON = async (response) => {
    if (response.status === 204 || response.status === 205) {
        return new NoContent_1.NoContent();
    }
    return response.data;
};
const validateStatus = async (response) => {
    if (response.status >= 200 && response.status < 300) {
        return;
    }
    throw new ResponseError_1.ResponseError(response, response.statusText);
};
const request = async (url, options, shouldParseJSON = true) => {
    if (shouldParseJSON) {
        const response = await (0, axios_1.default)(url, {
            ...options,
            validateStatus: () => true,
        });
        await validateStatus(response);
        return parseJSON(response);
    }
    return (0, axios_1.default)(url, options);
};
exports.request = request;
const authedRequest = async (apiBasePath, endpoint, token, options = {}, shouldParseJSON = true) => {
    return (0, exports.request)(`${apiBasePath}${endpoint}`, enhanceOptions(options, token), shouldParseJSON);
};
exports.authedRequest = authedRequest;
const publicRequest = async (apiBasePath, endpoint, options = {}, shouldParseJSON = true) => {
    return (0, exports.request)(`${apiBasePath}${endpoint}`, enhanceOptions(options), shouldParseJSON);
};
exports.publicRequest = publicRequest;
