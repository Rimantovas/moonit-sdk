"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseToken = void 0;
const solana_1 = require("../../../solana");
const calculateCurvePosition_1 = require("../../../solana/utils/calculateCurvePosition");
const web3_js_1 = require("@solana/web3.js");
const instructions_1 = require("../instructions");
const curve_1 = require("../curve");
const FixedSide_1 = require("./FixedSide");
class BaseToken {
    constructor(options) {
        this.moonit = options.moonit;
        this.mintAddress = options.mintAddress;
    }
    async curveAdapter() {
        if (this._curveAdapter != null) {
            return this._curveAdapter;
        }
        const curveAccount = await this.getCurveAccount();
        return (0, curve_1.getCurveAdapter)(curveAccount, this.moonit.provider, this.mintAddress);
    }
    async getCurveAccount() {
        return (0, solana_1.getCurveAccount)(this.moonit.provider, this.mintAddress);
    }
    async getCollateralPrice(options) {
        return (await this.curveAdapter()).getCollateralPrice(options);
    }
    async getCurvePosition() {
        const curveState = await (0, solana_1.getCurveAccount)(this.moonit.provider, this.mintAddress);
        return (0, calculateCurvePosition_1.calculateCurvePosition)(curveState.totalSupply, curveState.curveAmount);
    }
    async getTokenAmountByCollateral(options) {
        return (await this.curveAdapter()).getTokenAmountByCollateral(options);
    }
    async getCollateralAmountByTokens(options) {
        return (await this.curveAdapter()).getCollateralAmountByTokens(options);
    }
    async hasAntiSnipeProtection() {
        return (await this.curveAdapter()).hasAntiSnipeProtection();
    }
    async prepareIxs(options) {
        const program = this.moonit.provider.program;
        const { tokenAmount, collateralAmount, slippageBps, creatorPK, tradeDirection, } = options;
        const curveAccountPK = this.deriveCurveAddress(program);
        const defaultFixedSide = tradeDirection === 'BUY' ? FixedSide_1.FixedSide.OUT : FixedSide_1.FixedSide.IN;
        const fixedSide = options.fixedSide ?? defaultFixedSide;
        const req = {
            tokenAmount,
            collateralAmount,
            slippageBps,
            sender: new web3_js_1.PublicKey(creatorPK),
            curveAccount: new web3_js_1.PublicKey(curveAccountPK),
            mint: new web3_js_1.PublicKey(this.mintAddress),
            fixedSide,
        };
        return {
            ixs: [await this.getTradeInstruction(program, req, tradeDirection)],
        };
    }
    async getTradeInstruction(program, req, direction) {
        if (direction === 'BUY') {
            if (await this.hasAntiSnipeProtection()) {
                throw new Error(`Go to https://moon.it/tokens/${this.mintAddress} to trade this token.`);
            }
            return (0, instructions_1.getBuyTx)(program, req);
        }
        return (0, instructions_1.getSellTx)(program, req);
    }
    deriveCurveAddress(program) {
        const [address] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from('token'), new web3_js_1.PublicKey(this.mintAddress).toBytes()], program.programId);
        return address.toBase58();
    }
}
exports.BaseToken = BaseToken;
