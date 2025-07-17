import { PreloadedToken } from './PreloadedToken';
import { BaseToken } from './BaseToken';
export declare class Token extends BaseToken {
    /**
     * Preload the token with chain data to be able to use synchronous methods
     * getCollateralAmountByTokensSync and getTokenAmountByCollateralSync
     * */
    preload(): Promise<PreloadedToken>;
}
//# sourceMappingURL=Token.d.ts.map