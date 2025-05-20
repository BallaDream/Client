import type { STATUS } from '@/enums/enums';
//-- type
export interface IFaceStatus {
  forehead: { pigmentation: string; wringkle: string };
  glabella: { wringkle: string };
  lip: { dryness: string };
  chin: { sagging: string };
  rightPerocular: { wringkle: string };
  leftPerocular: { wringkle: string };
  rightCheek: { pigmentation: string; pore: string };
  leftCheek: { pigmentation: string; pore: string };
}

// ---value
export type TGetDiagnoseInfoValue = {
  diagnoseId: number;
};
// ---response
export type TGetDiagnoseInfoResponse = {
  specificResult: {
    wrinkleForeheadLevel: STATUS;
    elasticJawlineSaggingLevel: STATUS;
    pigmentForeheadLevel: STATUS;
    wrinkleGlabellaLevel: STATUS;
    wrinkleRightEyeLevel: STATUS;
    pigmentRightCheekLevel: STATUS;
    dryLipsLevel: STATUS;
    wrinkleLeftEyeLevel: STATUS;
    poreLeftCheekLevel: STATUS;
    pigmentLeftCheekLevel: STATUS;
    poreRightCheekLevel: STATUS;
  };
  totalResult: {
    PIGMENT: STATUS;
    ELASTIC: STATUS;
    WRINKLE: STATUS;
    PORE: STATUS;
    DRY: STATUS;
  };
};
