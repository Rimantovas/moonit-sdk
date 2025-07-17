"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuyTx = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const feeAccounts_1 = require("../feeAccounts");
const utils_1 = require("./utils");
const getBuyTx = async (program, req) => {
    const { sender, mint, curveAccount } = req;
    const [configAccount] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('config_account')], program.programId);
    const senderTokenAccount = await (0, spl_token_1.getAssociatedTokenAddress)(mint, sender, true);
    const curveTokenAccount = await (0, spl_token_1.getAssociatedTokenAddress)(mint, curveAccount, true);
    const data = {
        tokenAmount: (0, utils_1.convertBigIntToBN)(req.tokenAmount),
        collateralAmount: (0, utils_1.convertBigIntToBN)(req.collateralAmount),
        fixedSide: req.fixedSide,
        slippageBps: new anchor_1.BN(req.slippageBps),
    };
    return program.methods
        .buy(data)
        .accounts({
        sender,
        senderTokenAccount,
        curveAccount,
        curveTokenAccount,
        mint,
        configAccount,
        dexFee: feeAccounts_1.dexFeeAccount,
        helioFee: feeAccounts_1.helioFeeAccount,
        tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
        associatedTokenProgram: spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: web3_js_1.SystemProgram.programId,
    })
        .instruction();
};
exports.getBuyTx = getBuyTx;
