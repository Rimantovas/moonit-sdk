"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFlatCurveAdapter = void 0;
const AbstractCurveAdapter_1 = require("./AbstractCurveAdapter");
class BaseFlatCurveAdapter extends AbstractCurveAdapter_1.AbstractCurveAdapter {
    constructor(moonitProgram, mintAddress, collateralCollected) {
        super(moonitProgram, mintAddress);
        this.platformFeeBps = 100;
        this.curve = this.createCurve(collateralCollected);
    }
    getCollateralPrice(options) {
        return this.getCollateralAmountByTokens({
            tokenAmount: options.tokenAmount,
            tradeDirection: 'BUY',
            curvePosition: options.curvePosition,
        });
    }
    async getCollateralAmountByTokens(options) {
        const curvePosition = options.curvePosition ?? (await this.getCurvePosition());
        return this.curve.getCollateralAmountFromTokens({
            amount: options.tokenAmount,
            curvePosition,
            platformFeeBps: this.platformFeeBps,
            tradeDirection: options.tradeDirection,
        });
    }
    getCollateralAmountByTokensSync(options) {
        const curvePosition = options.curvePosition;
        return this.curve.getCollateralAmountFromTokens({
            amount: options.tokenAmount,
            curvePosition,
            platformFeeBps: this.platformFeeBps,
            tradeDirection: options.tradeDirection,
        });
    }
    async getTokenAmountByCollateral(options) {
        const curvePosition = options.curvePosition ?? (await this.getCurvePosition());
        return this.curve.getTokensAmountFromCollateral({
            amount: options.collateralAmount,
            curvePosition,
            platformFeeBps: this.platformFeeBps,
            tradeDirection: options.tradeDirection,
        });
    }
    getTokenAmountByCollateralSync(options) {
        const curvePosition = options.curvePosition;
        return this.curve.getTokensAmountFromCollateral({
            amount: options.collateralAmount,
            curvePosition,
            platformFeeBps: this.platformFeeBps,
            tradeDirection: options.tradeDirection,
        });
    }
}
exports.BaseFlatCurveAdapter = BaseFlatCurveAdapter;
