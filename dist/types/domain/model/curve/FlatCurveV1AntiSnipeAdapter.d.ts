import { FlatCurveV1AntiSnipe } from '@heliofi/launchpad-common';
import { BaseFlatCurveAdapter } from './BaseFlatCurveV1Adapter';
export declare class FlatCurveV1AntiSnipeAdapter extends BaseFlatCurveAdapter<FlatCurveV1AntiSnipe> {
    protected createCurve(collateralCollected: bigint): FlatCurveV1AntiSnipe;
    hasAntiSnipeProtection(): boolean;
}
//# sourceMappingURL=FlatCurveV1AntiSnipeAdapter.d.ts.map