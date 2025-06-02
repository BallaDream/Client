import type { IFaceStatus, TGetDiagnoseInfoResponse } from '@/types/resultPage/result';
import { LABEL, STATUS } from '@/enums/enums';

export const transformToFaceStatus = (data: TGetDiagnoseInfoResponse['specificResult']): IFaceStatus => {
  return {
    forehead: {
      [LABEL.PIGMENT]: data?.pigmentForeheadLevel || STATUS.CLEAR,
      [LABEL.WRINKLE]: data?.wrinkleForeheadLevel || STATUS.CLEAR,
    },
    glabella: {
      [LABEL.WRINKLE]: data?.wrinkleGlabellaLevel || STATUS.CLEAR,
    },
    lip: {
      [LABEL.DRY]: data?.dryLipsLevel || STATUS.CLEAR,
    },
    chin: {
      [LABEL.ELASTIC]: data?.elasticJawlineSaggingLevel || STATUS.CLEAR,
    },
    rightPerocular: {
      [LABEL.WRINKLE]: data?.wrinkleRightEyeLevel || STATUS.CLEAR,
    },
    leftPerocular: {
      [LABEL.WRINKLE]: data?.wrinkleLeftEyeLevel || STATUS.CLEAR,
    },
    rightCheek: {
      [LABEL.PIGMENT]: data?.pigmentRightCheekLevel || STATUS.CLEAR,
      [LABEL.PORE]: data?.poreRightCheekLevel || STATUS.CLEAR,
    },
    leftCheek: {
      [LABEL.PIGMENT]: data?.pigmentLeftCheekLevel || STATUS.CLEAR,
      [LABEL.PORE]: data?.poreLeftCheekLevel || STATUS.CLEAR,
    },
  };
};
