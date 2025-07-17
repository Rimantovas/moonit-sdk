import { MessageV0, VersionedMessage, VersionedTransaction } from '@solana/web3.js';
export declare class SolanaSerializationService {
    static serializeVersionedTransaction(transaction: VersionedTransaction): string;
    static deserializeVersionedTransaction(serializedTransaction: string): VersionedTransaction | undefined;
    static serializeVersionedMessage(message: VersionedMessage): string;
    static deserializeVersionedMessage(messageStr: string): MessageV0;
}
//# sourceMappingURL=SolanaSerializationService.d.ts.map