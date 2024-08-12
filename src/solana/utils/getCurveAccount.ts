import { Program } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import { TokenLaunchpadIdl } from '../program';
import { CurveAccount } from '../../domain';
import { convertBNtoBigInt } from './convertBNToBigInt';
import { convertContractEnums } from './convertContractCurrency';

export async function getCurveAccount(
  program: Program<TokenLaunchpadIdl>,
  mintAddress: string,
): Promise<CurveAccount> {
  const [curveAccountKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('token'), new PublicKey(mintAddress).toBytes()],
    program.programId,
  );

  const curveAccount =
    await program.account.curveAccount.fetch(curveAccountKey);

  if (curveAccount == null) {
    throw new Error('Curve account data not found');
  }
  const account = convertBNtoBigInt(curveAccount) as CurveAccount;
  return convertContractEnums(account);
}
