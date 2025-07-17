import { InitTokenOptions } from './InitTokenOptions';
import { Moonit } from '../moonit';
import { PrepareTxOptions } from './PrepareTxOptions';
import { GetCollateralPriceOptions } from './GetCollateralPriceOptions';
import { GetTokenAmountOptions } from './GetTokenAmountOptions';
import { GetCollateralAmountOptions } from './GetCollateralAmountOptions';
import { TokenLaunchpadIdl } from '../../../solana';
import { TransactionInstruction } from '@solana/web3.js';
import { Program } from '@coral-xyz/anchor';
import { TradeRequest } from '../instructions';
import { CurveAccount } from '../curve';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
export declare class BaseToken {
    protected moonit: Moonit;
    protected readonly mintAddress: string;
    protected _curveAdapter?: AbstractCurveAdapter;
    constructor(options: InitTokenOptions);
    protected curveAdapter(): Promise<AbstractCurveAdapter>;
    getCurveAccount(): Promise<CurveAccount>;
    getCollateralPrice(options: GetCollateralPriceOptions): Promise<bigint>;
    getCurvePosition(): Promise<bigint>;
    getTokenAmountByCollateral(options: GetTokenAmountOptions): Promise<bigint>;
    getCollateralAmountByTokens(options: GetCollateralAmountOptions): Promise<bigint>;
    hasAntiSnipeProtection(): Promise<boolean>;
    prepareIxs(options: PrepareTxOptions): Promise<{
        ixs: TransactionInstruction[];
    }>;
    protected getTradeInstruction(program: Program<TokenLaunchpadIdl>, req: TradeRequest, direction: 'BUY' | 'SELL'): Promise<TransactionInstruction>;
    protected deriveCurveAddress(program: Program<TokenLaunchpadIdl>): string;
}
//# sourceMappingURL=BaseToken.d.ts.map