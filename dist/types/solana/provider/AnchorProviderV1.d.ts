import { TokenLaunchpadIdl } from '../program';
import { BaseAnchorProvider } from './BaseAnchorProvider';
import { ConfirmOptions } from '@solana/web3.js';
export declare class AnchorProviderV1 extends BaseAnchorProvider<TokenLaunchpadIdl> {
    constructor(connectionStr: string, confirmOptions?: ConfirmOptions);
    get version(): string;
}
//# sourceMappingURL=AnchorProviderV1.d.ts.map