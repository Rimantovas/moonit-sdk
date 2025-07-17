"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaSerializationService = void 0;
const web3_js_1 = require("@solana/web3.js");
class SolanaSerializationService {
    static serializeVersionedTransaction(transaction) {
        return Buffer.from(transaction.serialize()).toString('base64');
    }
    static deserializeVersionedTransaction(serializedTransaction) {
        try {
            return web3_js_1.VersionedTransaction.deserialize(Buffer.from(serializedTransaction, 'base64'));
        }
        catch (e) {
            return undefined;
        }
    }
    static serializeVersionedMessage(message) {
        return JSON.stringify(Array.from(message.serialize()));
    }
    static deserializeVersionedMessage(messageStr) {
        const array = JSON.parse(messageStr);
        return web3_js_1.MessageV0.deserialize(new Uint8Array(array));
    }
}
exports.SolanaSerializationService = SolanaSerializationService;
