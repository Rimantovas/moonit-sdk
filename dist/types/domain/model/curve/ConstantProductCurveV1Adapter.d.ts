import { GetCollateralPriceOptions, GetCollateralAmountOptions, GetTokenAmountOptions } from '../token';
import { GetTokenAmountSyncOptions } from '../token/GetTokenAmountSyncOptions';
import { AbstractCurveAdapter } from './AbstractCurveAdapter';
import { GetCollateralAmountSyncOptions } from '../token/GetCollateralAmountSyncOptions';
export declare class ConstantProductCurveV1Adapter extends AbstractCurveAdapter {
    private readonly platformFeeBps;
    private readonly curve;
    getCollateralPrice(options: GetCollateralPriceOptions): Promise<bigint>;
    getCollateralAmountByTokens(options: GetCollateralAmountOptions): Promise<bigint>;
    getCollateralAmountByTokensSync(options: GetCollateralAmountSyncOptions): bigint;
    getTokenAmountByCollateral(options: GetTokenAmountOptions): Promise<bigint>;
    getTokenAmountByCollateralSync(options: GetTokenAmountSyncOptions): bigint;
}
//# sourceMappingURL=ConstantProductCurveV1Adapter.d.ts.map