"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorProviderV1 = void 0;
const program_1 = require("../program");
const BaseAnchorProvider_1 = require("./BaseAnchorProvider");
class AnchorProviderV1 extends BaseAnchorProvider_1.BaseAnchorProvider {
    constructor(connectionStr, confirmOptions) {
        super(connectionStr, program_1.tokenLaunchpadIdlV4, program_1.programId, confirmOptions);
    }
    get version() {
        return 'V1';
    }
}
exports.AnchorProviderV1 = AnchorProviderV1;
