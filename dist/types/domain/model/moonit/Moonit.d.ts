import { InitMoonitOptions } from './InitMoonitOptions';
import { InitTokenOptions, Token } from '../token';
import { TokenLaunchpadIdl, BaseAnchorProvider } from '../../../solana';
import { PrepareMintTxOptions } from './PrepareMintTxOptions';
import { PrepareMintTxResponse } from './PrepareMintTxResponse';
import { SubmitMintTxOptions } from './SubmitMintTxOptions';
import { SubmitMintTxResponse } from './SubmitMintTxResponse';
export declare class Moonit {
    private environment;
    private apiAdapter;
    provider: BaseAnchorProvider<TokenLaunchpadIdl>;
    constructor(options: InitMoonitOptions);
    Token(options: Omit<InitTokenOptions, 'moonit'>): Token;
    prepareMintTx(options: PrepareMintTxOptions): Promise<PrepareMintTxResponse>;
    submitMintTx(options: SubmitMintTxOptions): Promise<SubmitMintTxResponse>;
}
//# sourceMappingURL=Moonit.d.ts.map