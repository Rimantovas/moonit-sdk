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
exports.BaseAnchorProvider = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor = __importStar(require("@coral-xyz/anchor"));
const anchor_1 = require("@coral-xyz/anchor");
class BaseAnchorProvider {
    constructor(connectionStr, IDL, PROGRAM_ID, confirmOptions) {
        this.connectionStr = connectionStr;
        this.IDL = IDL;
        this.PROGRAM_ID = PROGRAM_ID;
        this.txOpts = {
            skipPreflight: false,
            commitment: 'confirmed',
            maxRetries: 5,
        };
        this.txOpts = { ...this.txOpts, ...confirmOptions };
        this._connection = new web3_js_1.Connection(connectionStr, this.txOpts.commitment);
        this.setProvider();
        this._program = new anchor_1.Program(this.IDL, this.PROGRAM_ID);
    }
    get commitment() {
        return this.txOpts.commitment;
    }
    get program() {
        return this._program;
    }
    get connection() {
        return this._connection;
    }
    setProvider() {
        const provider = new anchor_1.AnchorProvider(
        // Anchor @solana/web3.js version mismatch
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._connection, {}, this.txOpts);
        anchor.setProvider(provider);
    }
}
exports.BaseAnchorProvider = BaseAnchorProvider;
