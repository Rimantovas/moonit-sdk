"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBigIntToBN = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const convertBigIntToBN = (bigInt) => {
    return new anchor_1.BN(String(bigInt));
};
exports.convertBigIntToBN = convertBigIntToBN;
