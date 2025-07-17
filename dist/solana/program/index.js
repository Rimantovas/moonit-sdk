"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenLaunchpadIdlV4 = exports.programId = void 0;
const web3_js_1 = require("@solana/web3.js");
const tokenLaunchpadIdlV4_1 = require("./tokenLaunchpadIdlV4");
exports.programId = new web3_js_1.PublicKey(tokenLaunchpadIdlV4_1.IDL_V4.metadata.address);
exports.tokenLaunchpadIdlV4 = tokenLaunchpadIdlV4_1.IDL_V4;
