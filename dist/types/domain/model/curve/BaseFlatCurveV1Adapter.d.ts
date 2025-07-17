import { GetCollateralPriceOptions, GetCollateralAmountOptions, GetTokenAmountOptions } from '../token';
import { GetTokenAmountSyncOptions } from '../token/GetTokenAmountSyncOptions';
import { AbstractCurveAdapter } from './AbstractCurveAdapter';
import { FlatCurveV1, FlatCurveV1AntiSnipe } from '@heliofi/launchpad-common';
import { GetCollateralAmountSyncOptions } from '../token/GetCollateralAmountSyncOptions';
import { TokenLaunchpadIdl } from '../../../solana';
import { BaseAnchorProvider } from '../../../solana';
export declare abstract class BaseFlatCurveAdapter<T extends FlatCurveV1 | FlatCurveV1AntiSnipe> extends AbstractCurveAdapter {
    private readonly platformFeeBps;
    private readonly curve;
    constructor(moonitProgram: BaseAnchorProvider<TokenLaunchpadIdl>, mintAddress: string, collateralCollected: bigint);
    protected abstract createCurve(collateralCollected: bigint): T;
    getCollateralPrice(options: GetCollateralPriceOptions): Promise<bigint>;
    getCollateralAmountByTokens(options: GetCollateralAmountOptions): Promise<bigint>;
    getCollateralAmountByTokensSync(options: GetCollateralAmountSyncOptions): bigint;
    getTokenAmountByCollateral(options: GetTokenAmountOptions): Promise<bigint>;
    getTokenAmountByCollateralSync(options: GetTokenAmountSyncOptions): bigint;
}
//# sourceMappingURL=BaseFlatCurveV1Adapter.d.ts.map