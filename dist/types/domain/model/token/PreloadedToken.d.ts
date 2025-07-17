import { CurveAccount } from '../curve';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
import { Moonit } from '../moonit';
import { BaseToken } from './BaseToken';
import { GetCollateralAmountSyncOptions } from './GetCollateralAmountSyncOptions';
import { GetTokenAmountSyncOptions } from './GetTokenAmountSyncOptions';
import { InitTokenOptions } from './InitTokenOptions';
import { ITokenPreloadedOperations } from './ITokenPreloadedOperations';
/**
 * PreloadedToken extends BaseToken class in its functionality
 * And allows synchronous functions
 * This helps to avoid async calls even when the curve position is known
 * */
export declare class PreloadedToken extends BaseToken implements ITokenPreloadedOperations {
    protected moonit: Moonit;
    protected readonly mintAddress: string;
    protected _curveAdapter: AbstractCurveAdapter;
    constructor(options: InitTokenOptions, curveAdapter: AbstractCurveAdapter);
    static init(options: InitTokenOptions): Promise<PreloadedToken>;
    static initSync(options: InitTokenOptions, curveAccount: CurveAccount): PreloadedToken;
    get curveAdapterSync(): AbstractCurveAdapter;
    getCollateralAmountByTokensSync(options: GetCollateralAmountSyncOptions): bigint;
    getTokenAmountByCollateralSync(options: GetTokenAmountSyncOptions): bigint;
}
//# sourceMappingURL=PreloadedToken.d.ts.map