import type { IFaceStatus, TGetDiagnoseInfoResponse } from '@/types/resultPage/result';

export const transformToFaceStatus = (data: TGetDiagnoseInfoResponse['specificResult']): IFaceStatus => {
  return {
    forehead: {
      pigmentation: data.pigmentForeheadLevel,
      wringkle: data.wrinkleForeheadLevel,
    },
    glabella: {
      wringkle: data.wrinkleGlabellaLevel,
    },
    lip: {
      dryness: data.dryLipsLevel,
    },
    chin: {
      sagging: data.elasticJawlineSaggingLevel,
    },
    rightPerocular: {
      wringkle: data.wrinkleRightEyeLevel,
    },
    leftPerocular: {
      wringkle: data.wrinkleLeftEyeLevel,
    },
    rightCheek: {
      pigmentation: data.pigmentRightCheekLevel,
      pore: data.poreRightCheekLevel,
    },
    leftCheek: {
      pigmentation: data.pigmentLeftCheekLevel,
      pore: data.poreLeftCheekLevel,
    },
  };
};
