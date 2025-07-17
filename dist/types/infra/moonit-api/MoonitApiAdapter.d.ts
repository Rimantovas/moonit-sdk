import { Environment } from '../../domain';
import { CreateMintResponse, MintTxPrepareDto, MintTxPrepareResponse, MintTxSubmitDto, MintTxSubmitResponse } from '@heliofi/launchpad-common';
import { PrepareMintTxOptions } from '../../domain/model/moonit/PrepareMintTxOptions';
export declare class MoonitApiAdapter {
    private token;
    private env;
    private apiClient;
    constructor(token: string, env: Environment);
    createMint(prepareBuyDto: PrepareMintTxOptions): Promise<CreateMintResponse>;
    prepareMint(pairId: string, prepareBuyDto: MintTxPrepareDto): Promise<MintTxPrepareResponse>;
    submitMint(submitDto: MintTxSubmitDto): Promise<MintTxSubmitResponse>;
}
//# sourceMappingURL=MoonitApiAdapter.d.ts.map