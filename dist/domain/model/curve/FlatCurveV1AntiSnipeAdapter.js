"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatCurveV1AntiSnipeAdapter = void 0;
const launchpad_common_1 = require("@heliofi/launchpad-common");
const BaseFlatCurveV1Adapter_1 = require("./BaseFlatCurveV1Adapter");
class FlatCurveV1AntiSnipeAdapter extends BaseFlatCurveV1Adapter_1.BaseFlatCurveAdapter {
    createCurve(collateralCollected) {
        return new launchpad_common_1.FlatCurveV1AntiSnipe(collateralCollected);
    }
    hasAntiSnipeProtection() {
        return true;
    }
}
exports.FlatCurveV1AntiSnipeAdapter = FlatCurveV1AntiSnipeAdapter;
