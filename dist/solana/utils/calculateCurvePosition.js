"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCurvePosition = calculateCurvePosition;
function calculateCurvePosition(totalSupply, curveAmount, optionsCurvePosition) {
    return optionsCurvePosition != null
        ? BigInt(optionsCurvePosition)
        : totalSupply - curveAmount;
}
