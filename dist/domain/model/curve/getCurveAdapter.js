"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurveAdapter = void 0;
const launchpad_common_1 = require("@heliofi/launchpad-common");
const ConstantProductCurveV1Adapter_1 = require("./ConstantProductCurveV1Adapter");
const LinearCurveV1Adapter_1 = require("./LinearCurveV1Adapter");
const FlatCurveV1Adapter_1 = require("./FlatCurveV1Adapter");
const ConstantProductCurveV2Adapter_1 = require("./ConstantProductCurveV2Adapter");
const FlatCurveV1AntiSnipeAdapter_1 = require("./FlatCurveV1AntiSnipeAdapter");
const getCurveAdapter = (curveAccount, programProvider, mintAddress) => {
    switch (curveAccount.curveType) {
        case launchpad_common_1.ContractCurveType.CONSTANT_PRODUCT_V1:
            return new ConstantProductCurveV1Adapter_1.ConstantProductCurveV1Adapter(programProvider, mintAddress);
        case launchpad_common_1.ContractCurveType.CONSTANT_PRODUCT_V2:
            return new ConstantProductCurveV2Adapter_1.ConstantProductCurveV2Adapter(programProvider, mintAddress);
        case launchpad_common_1.ContractCurveType.LINEAR_V1:
            return new LinearCurveV1Adapter_1.LinearCurveV1Adapter(programProvider, mintAddress);
        case launchpad_common_1.ContractCurveType.FLAT_V1:
            return new FlatCurveV1Adapter_1.FlatCurveV1Adapter(programProvider, mintAddress, curveAccount.marketcapThreshold);
        case launchpad_common_1.ContractCurveType.FLAT_V1_ANTI_SNIPE:
            return new FlatCurveV1AntiSnipeAdapter_1.FlatCurveV1AntiSnipeAdapter(programProvider, mintAddress, curveAccount.marketcapThreshold);
        default:
            throw new Error('Unsupported curve type');
    }
};
exports.getCurveAdapter = getCurveAdapter;
