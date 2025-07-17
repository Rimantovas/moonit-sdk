"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCurveAdapter = void 0;
const solana_1 = require("../../../solana");
const calculateCurvePosition_1 = require("../../../solana/utils/calculateCurvePosition");
class AbstractCurveAdapter {
    constructor(moonitProgram, mintAddress) {
        this.moonitProgram = moonitProgram;
        this.mintAddress = mintAddress;
    }
    async getCurveAccount() {
        return (0, solana_1.getCurveAccount)(this.moonitProgram, this.mintAddress);
    }
    async getCurvePosition() {
        const curveState = await this.getCurveAccount();
        return (0, calculateCurvePosition_1.calculateCurvePosition)(curveState.totalSupply, curveState.curveAmount);
    }
    hasAntiSnipeProtection() {
        return false;
    }
}
exports.AbstractCurveAdapter = AbstractCurveAdapter;
