"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBNtoBigInt = convertBNtoBigInt;
const anchor_1 = require("@coral-xyz/anchor");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function convertBNtoBigInt(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof anchor_1.BN) {
                newObj[key] = BigInt(obj[key].toString());
            }
            else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
