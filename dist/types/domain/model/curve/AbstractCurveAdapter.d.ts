import { GetCollateralAmountOptions, GetCollateralPriceOptions, GetTokenAmountOptions } from '../token';
import { CurveAccount } from './CurveAccount';
import { BaseAnchorProvider, TokenLaunchpadIdl } from '../../../solana';
import { GetCollateralAmountSyncOptions } from '../token/GetCollateralAmountSyncOptions';
import { GetTokenAmountSyncOptions } from '../token/GetTokenAmountSyncOptions';
export declare abstract class AbstractCurveAdapter {
    protected moonitProgram: BaseAnchorProvider<TokenLaunchpadIdl>;
    protected mintAddress: string;
    constructor(moonitProgram: BaseAnchorProvider<TokenLaunchpadIdl>, mintAddress: string);
    abstract getCollateralPrice(options: GetCollateralPriceOptions): Promise<bigint>;
    abstract getCollateralAmountByTokens(options: GetCollateralAmountOptions): Promise<bigint>;
    abstract getCollateralAmountByTokensSync(options: GetCollateralAmountSyncOptions): bigint;
    abstract getTokenAmountByCollateral(options: GetTokenAmountOptions): Promise<bigint>;
    abstract getTokenAmountByCollateralSync(options: GetTokenAmountSyncOptions): bigint;
    getCurveAccount(): Promise<CurveAccount>;
    getCurvePosition(): Promise<bigint>;
    hasAntiSnipeProtection(): boolean;
}
//# sourceMappingURL=AbstractCurveAdapter.d.ts.map