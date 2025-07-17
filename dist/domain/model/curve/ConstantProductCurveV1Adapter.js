"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantProductCurveV1Adapter = void 0;
const AbstractCurveAdapter_1 = require("./AbstractCurveAdapter");
const launchpad_common_1 = require("@heliofi/launchpad-common");
class ConstantProductCurveV1Adapter extends AbstractCurveAdapter_1.AbstractCurveAdapter {
    constructor() {
        super(...arguments);
        this.platformFeeBps = 100;
        this.curve = new launchpad_common_1.ConstantProductCurveV1();
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
exports.ConstantProductCurveV1Adapter = ConstantProductCurveV1Adapter;
