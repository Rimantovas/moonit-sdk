"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurveAccount = getCurveAccount;
const web3_js_1 = require("@solana/web3.js");
const convertBNToBigInt_1 = require("./convertBNToBigInt");
const convertContractCurrency_1 = require("./convertContractCurrency");
async function getCurveAccount(provider, mintAddress) {
    const [curveAccountKey] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('token'), new web3_js_1.PublicKey(mintAddress).toBytes()], provider.program.programId);
    const curveAccount = await // eslint-disable-next-line @typescript-eslint/no-explicit-any
     provider.program.account.curveAccount.fetch(curveAccountKey, provider.commitment);
    if (curveAccount == null) {
        throw new Error('Curve account data not found');
    }
    const account = (0, convertBNToBigInt_1.convertBNtoBigInt)(curveAccount);
    return (0, convertContractCurrency_1.convertContractEnums)(account);
}
