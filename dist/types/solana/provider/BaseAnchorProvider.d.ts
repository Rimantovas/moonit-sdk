import { Commitment, ConfirmOptions, Connection } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
export declare abstract class BaseAnchorProvider<T extends anchor.Idl> {
    protected connectionStr: string;
    protected IDL: T;
    protected PROGRAM_ID: anchor.web3.PublicKey;
    private txOpts;
    private readonly _program;
    private readonly _connection;
    protected constructor(connectionStr: string, IDL: T, PROGRAM_ID: anchor.web3.PublicKey, confirmOptions?: ConfirmOptions);
    get commitment(): Commitment;
    get program(): Program<T>;
    get connection(): Connection;
    abstract get version(): string;
    private setProvider;
}
//# sourceMappingURL=BaseAnchorProvider.d.ts.map