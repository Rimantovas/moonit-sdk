"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreloadedToken = void 0;
const solana_1 = require("../../../solana");
const curve_1 = require("../curve");
const BaseToken_1 = require("./BaseToken");
/**
 * PreloadedToken extends BaseToken class in its functionality
 * And allows synchronous functions
 * This helps to avoid async calls even when the curve position is known
 * */
class PreloadedToken extends BaseToken_1.BaseToken {
    constructor(options, curveAdapter) {
        super(options);
        this.moonit = options.moonit;
        this.mintAddress = options.mintAddress;
        this._curveAdapter = curveAdapter;
    }
    static async init(options) {
        const curveAccount = await (0, solana_1.getCurveAccount)(options.moonit.provider, options.mintAddress);
        const curveAdapter = (0, curve_1.getCurveAdapter)(curveAccount, options.moonit.provider, options.mintAddress);
        return new PreloadedToken(options, curveAdapter);
    }
    static initSync(options, curveAccount) {
        const curveAdapter = (0, curve_1.getCurveAdapter)(curveAccount, options.moonit.provider, options.mintAddress);
        return new PreloadedToken(options, curveAdapter);
    }
    get curveAdapterSync() {
        return this._curveAdapter;
    }
    getCollateralAmountByTokensSync(options) {
        return this.curveAdapterSync.getCollateralAmountByTokensSync(options);
    }
    getTokenAmountByCollateralSync(options) {
        return this.curveAdapterSync.getTokenAmountByCollateralSync(options);
    }
}
exports.PreloadedToken = PreloadedToken;
