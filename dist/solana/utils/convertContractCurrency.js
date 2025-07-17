"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertContractEnums = convertContractEnums;
const launchpad_common_1 = require("@heliofi/launchpad-common");
function convertContractEnums(curveAccount) {
    if (!curveAccount || !curveAccount.marketcapCurrency) {
        throw new Error('Invalid curve account');
    }
    let keys = Object.keys(curveAccount.marketcapCurrency);
    if (keys.length > 0 && keys[0].toLowerCase() === 'sol') {
        curveAccount.marketcapCurrency = launchpad_common_1.ContractCurrency.SOL;
    }
    else {
        throw new Error(`Unknown marketcap currency: ${curveAccount.marketcapCurrency}`);
    }
    keys = Object.keys(curveAccount.collateralCurrency);
    if (keys.length > 0 && keys[0].toLowerCase() === 'sol') {
        curveAccount.collateralCurrency = launchpad_common_1.ContractCurrency.SOL;
    }
    else {
        throw new Error(`Unknown collateral currency: ${curveAccount.marketcapCurrency}`);
    }
    keys = Object.keys(curveAccount.curveType);
    if (keys.length === 0) {
        throw new Error(`Curve type is missing`);
    }
    switch (keys[0].toLowerCase()) {
        case 'linearv1':
            curveAccount.curveType = launchpad_common_1.ContractCurveType.LINEAR_V1;
            break;
        case 'constantproductv1':
            curveAccount.curveType = launchpad_common_1.ContractCurveType.CONSTANT_PRODUCT_V1;
            break;
        case 'constantproductv2':
            curveAccount.curveType = launchpad_common_1.ContractCurveType.CONSTANT_PRODUCT_V2;
            break;
        case 'flatcurvev1':
            curveAccount.curveType = launchpad_common_1.ContractCurveType.FLAT_V1;
            break;
        case 'flatcurvev1antisnipe':
            curveAccount.curveType = launchpad_common_1.ContractCurveType.FLAT_V1_ANTI_SNIPE;
            break;
        default:
            throw new Error(`Unknown curve type: ${curveAccount.curveType}`);
    }
    return curveAccount;
}
