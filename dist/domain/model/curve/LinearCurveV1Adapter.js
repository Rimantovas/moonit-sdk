"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearCurveV1Adapter = void 0;
const AbstractCurveAdapter_1 = require("./AbstractCurveAdapter");
const launchpad_common_1 = require("@heliofi/launchpad-common");
const calculateCurvePosition_1 = require("../../../solana/utils/calculateCurvePosition");
const currency_1 = require("../currency");
class LinearCurveV1Adapter extends AbstractCurveAdapter_1.AbstractCurveAdapter {
    constructor() {
        super(...arguments);
        this.curve = new launchpad_common_1.LinearCurveV1();
    }
    async getCollateralPrice(options) {
        const curveState = await this.getCurveAccount();
        const { curveAmount, collateralCurrency, marketcapCurrency, totalSupply, marketcapThreshold, coefB, decimals, } = curveState;
        const { tokenAmount } = options;
        const curvePosition = (0, calculateCurvePosition_1.calculateCurvePosition)(totalSupply, curveAmount, options.curvePosition);
        const price = this.curve.getCollateralPrice({
            collateralDecimalsNr: currency_1.currencyDecimals[collateralCurrency],
            tokenDecimalsNr: decimals,
            marketCapDecimalsNr: currency_1.currencyDecimals[marketcapCurrency],
            totalSupply,
            marketCapThreshold: marketcapThreshold,
            tokensAmount: tokenAmount,
            curvePosition,
            coefB: BigInt(coefB),
        });
        return BigInt(price.toFixed(0));
    }
    async getCollateralAmountByTokens(options) {
        const curveState = await this.getCurveAccount();
        const { curveAmount, collateralCurrency, marketcapCurrency, totalSupply, marketcapThreshold, coefB, decimals, } = curveState;
        const { tokenAmount } = options;
        const currentCurvePosition = (0, calculateCurvePosition_1.calculateCurvePosition)(totalSupply, curveAmount, options.curvePosition);
        const curvePosition = options.tradeDirection === launchpad_common_1.TradeDirection.SELL
            ? currentCurvePosition - tokenAmount
            : currentCurvePosition;
        if (curvePosition < 0n) {
            throw new Error('Insufficient tokens amount');
        }
        const price = this.curve.getCollateralPrice({
            collateralDecimalsNr: currency_1.currencyDecimals[collateralCurrency],
            tokenDecimalsNr: decimals,
            marketCapDecimalsNr: currency_1.currencyDecimals[marketcapCurrency],
            totalSupply,
            marketCapThreshold: marketcapThreshold,
            tokensAmount: tokenAmount,
            curvePosition,
            coefB: BigInt(coefB),
        });
        return BigInt(price.toFixed(0));
    }
    getCollateralAmountByTokensSync() {
        throw new Error('Method not supported for this curve type.');
    }
    getTokenAmountByCollateralSync() {
        throw new Error('Method not implemented.');
    }
    async getTokenAmountByCollateral(options) {
        const curveState = await this.getCurveAccount();
        const { collateralAmount } = options;
        const { curveAmount, collateralCurrency, marketcapCurrency, totalSupply, marketcapThreshold, coefB, decimals, } = curveState;
        const curvePosition = (0, calculateCurvePosition_1.calculateCurvePosition)(totalSupply, curveAmount, options.curvePosition);
        return this.curve.getTokensNrFromCollateral({
            collateralAmount,
            collateralDecimalsNr: currency_1.currencyDecimals[collateralCurrency],
            tokenDecimalsNr: decimals,
            marketCapDecimalsNr: currency_1.currencyDecimals[marketcapCurrency],
            totalSupply: totalSupply,
            marketCapThreshold: marketcapThreshold,
            curvePosition,
            coefB: BigInt(coefB),
            direction: options.tradeDirection,
        });
    }
}
exports.LinearCurveV1Adapter = LinearCurveV1Adapter;
