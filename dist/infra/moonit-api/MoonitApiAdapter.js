"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonitApiAdapter = void 0;
const domain_1 = require("../../domain");
const http_1 = require("../http");
const extractSocialLinks_1 = require("../../solana/utils/extractSocialLinks");
class MoonitApiAdapter {
    constructor(token, env) {
        this.token = token;
        this.env = env;
        const apiBasePath = env === domain_1.Environment.MAINNET
            ? 'https://api.mintlp.io/v1'
            : 'https://api.dev.mintlp.io/v1';
        this.apiClient = new http_1.ApiClient({ apiBasePath });
    }
    async createMint(prepareBuyDto) {
        const links = (0, extractSocialLinks_1.extractLinks)(prepareBuyDto.links);
        const data = {
            name: prepareBuyDto.name,
            symbol: prepareBuyDto.symbol,
            curveType: prepareBuyDto.curveType,
            migrationDex: prepareBuyDto.migrationDex,
            icon: prepareBuyDto.icon,
            description: prepareBuyDto.description,
            banner: prepareBuyDto.banner,
            affiliate: prepareBuyDto.affiliate,
            x: links.x,
            discord: links.discord,
            telegram: links.telegram,
            website: links.website,
            vanityExtension: prepareBuyDto?.vanityExtension
                ? prepareBuyDto.vanityExtension
                : undefined,
        };
        return this.apiClient.authedRequest(`/mint/create/metadata/sdk`, this.token, {
            method: 'POST',
            data,
        });
    }
    async prepareMint(pairId, prepareBuyDto) {
        return this.apiClient.authedRequest(`/mint/tx/prepare/${pairId}/sdk`, this.token, {
            method: 'POST',
            data: prepareBuyDto,
        });
    }
    submitMint(submitDto) {
        return this.apiClient.authedRequest(`/mint/tx/submit/sdk`, this.token, {
            method: 'POST',
            data: submitDto,
        });
    }
}
exports.MoonitApiAdapter = MoonitApiAdapter;
