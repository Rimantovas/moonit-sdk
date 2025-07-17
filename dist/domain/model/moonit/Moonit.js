"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moonit = void 0;
const token_1 = require("../token");
const solana_1 = require("../../../solana");
const infra_1 = require("../../../infra");
class Moonit {
    constructor(options) {
        this.provider = new solana_1.AnchorProviderV1(options.rpcUrl, options.chainOptions?.solana?.confirmOptions);
        this.environment = options.environment;
        this.apiAdapter = new infra_1.MoonitApiAdapter(options.authToken ?? '', this.environment);
    }
    Token(options) {
        return new token_1.Token({ ...options, moonit: this });
    }
    async prepareMintTx(options) {
        const createMintRes = await this.apiAdapter.createMint({
            ...options,
        });
        const res = await this.apiAdapter.prepareMint(createMintRes.pairId, {
            amount: options.tokenAmount,
            creatorPK: options.creator,
        });
        return {
            token: res.token,
            tokenId: createMintRes.pairId,
            transaction: res.transaction,
        };
    }
    async submitMintTx(options) {
        const res = await this.apiAdapter.submitMint(options);
        return {
            txSignature: res.transactionSignature,
            status: res.status,
        };
    }
}
exports.Moonit = Moonit;
