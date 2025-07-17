import { TransactionInstruction } from '@solana/web3.js';
import { TokenLaunchpadIdl } from '../../../solana';
import { Program } from '@coral-xyz/anchor';
import { TradeRequest } from './types';
export declare const getBuyTx: (program: Program<TokenLaunchpadIdl>, req: TradeRequest) => Promise<TransactionInstruction>;
//# sourceMappingURL=getBuyTx.d.ts.map