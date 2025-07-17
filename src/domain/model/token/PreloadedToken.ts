import { getCurveAccount } from '../../../solana';
import { getCurveAdapter } from '../curve';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
import { Moonit } from '../moonit';
import { BaseToken } from './BaseToken';
import { GetCollateralAmountSyncOptions } from './GetCollateralAmountSyncOptions';
import { GetTokenAmountSyncOptions } from './GetTokenAmountSyncOptions';
import { InitTokenOptions } from './InitTokenOptions';
import { ITokenPreloadedOperations } from './ITokenPreloadedOperations';

/**
 * PreloadedToken extends BaseToken class in its functionality
 * And allows synchronous functions
 * This helps to avoid async calls even when the curve position is known
 * */
export class PreloadedToken
  extends BaseToken
  implements ITokenPreloadedOperations
{
  protected moonit: Moonit;

  protected readonly mintAddress: string;

  protected _curveAdapter: AbstractCurveAdapter;

  public constructor(
    options: InitTokenOptions,
    curveAdapter: AbstractCurveAdapter,
  ) {
    super(options);
    this.moonit = options.moonit;
    this.mintAddress = options.mintAddress;
    this._curveAdapter = curveAdapter;
  }

  static async init(options: InitTokenOptions): Promise<PreloadedToken> {
    const curveAccount = await getCurveAccount(
      options.moonit.provider,
      options.mintAddress,
    );
    const curveAdapter = getCurveAdapter(
      curveAccount,
      options.moonit.provider,
      options.mintAddress,
    );
    return new PreloadedToken(options, curveAdapter);
  }

  get curveAdapterSync(): AbstractCurveAdapter {
    return this._curveAdapter;
  }

  getCollateralAmountByTokensSync(
    options: GetCollateralAmountSyncOptions,
  ): bigint {
    return this.curveAdapterSync.getCollateralAmountByTokensSync(options);
  }

  getTokenAmountByCollateralSync(options: GetTokenAmountSyncOptions): bigint {
    return this.curveAdapterSync.getTokenAmountByCollateralSync(options);
  }
}
