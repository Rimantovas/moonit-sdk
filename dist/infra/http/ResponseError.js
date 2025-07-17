"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError extends Error {
    constructor(response, message) {
        super(response.statusText);
        this.response = response;
        this.message = message;
        Object.setPrototypeOf(this, ResponseError.prototype);
    }
}
exports.ResponseError = ResponseError;
