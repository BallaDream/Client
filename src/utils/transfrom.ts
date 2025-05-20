import type { IFaceStatus, TGetDiagnoseInfoResponse } from '@/types/resultPage/result';
import { LABEL } from '@/enums/enums';

export const transformToFaceStatus = (data: TGetDiagnoseInfoResponse['specificResult']): IFaceStatus => {
  return {
    forehead: {
      [LABEL.PIGMENT]: data.pigmentForeheadLevel,
      [LABEL.WRINKLE]: data.wrinkleForeheadLevel,
    },
    glabella: {
      [LABEL.WRINKLE]: data.wrinkleGlabellaLevel,
    },
    lip: {
      [LABEL.DRY]: data.dryLipsLevel,
    },
    chin: {
      [LABEL.ELASTIC]: data.elasticJawlineSaggingLevel,
    },
    rightPerocular: {
      [LABEL.WRINKLE]: data.wrinkleRightEyeLevel,
    },
    leftPerocular: {
      [LABEL.WRINKLE]: data.wrinkleLeftEyeLevel,
    },
    rightCheek: {
      [LABEL.PIGMENT]: data.pigmentRightCheekLevel,
      [LABEL.PORE]: data.poreRightCheekLevel,
    },
    leftCheek: {
      [LABEL.PIGMENT]: data.pigmentLeftCheekLevel,
      [LABEL.PORE]: data.poreLeftCheekLevel,
    },
  };
};
