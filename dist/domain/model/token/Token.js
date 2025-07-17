"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const PreloadedToken_1 = require("./PreloadedToken");
const BaseToken_1 = require("./BaseToken");
class Token extends BaseToken_1.BaseToken {
    /**
     * Preload the token with chain data to be able to use synchronous methods
     * getCollateralAmountByTokensSync and getTokenAmountByCollateralSync
     * */
    preload() {
        return PreloadedToken_1.PreloadedToken.init({
            mintAddress: this.mintAddress,
            moonit: this.moonit,
        });
    }
}
exports.Token = Token;
