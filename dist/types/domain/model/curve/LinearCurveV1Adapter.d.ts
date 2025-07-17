import { GetCollateralPriceOptions, GetCollateralAmountOptions, GetTokenAmountOptions } from '../token';
import { AbstractCurveAdapter } from './AbstractCurveAdapter';
export declare class LinearCurveV1Adapter extends AbstractCurveAdapter {
    private readonly curve;
    getCollateralPrice(options: GetCollateralPriceOptions): Promise<bigint>;
    getCollateralAmountByTokens(options: GetCollateralAmountOptions): Promise<bigint>;
    getCollateralAmountByTokensSync(): bigint;
    getTokenAmountByCollateralSync(): bigint;
    getTokenAmountByCollateral(options: GetTokenAmountOptions): Promise<bigint>;
}
//# sourceMappingURL=LinearCurveV1Adapter.d.ts.map