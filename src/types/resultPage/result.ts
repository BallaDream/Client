import type { LABEL, STATUS } from '@/enums/enums';
//-- type
export interface IFaceStatus {
  forehead: { [LABEL.PIGMENT]: string; [LABEL.WRINKLE]: string };
  glabella: { [LABEL.WRINKLE]: string };
  lip: { [LABEL.DRY]: string };
  chin: { [LABEL.ELASTIC]: string };
  rightPerocular: { [LABEL.WRINKLE]: string };
  leftPerocular: { [LABEL.WRINKLE]: string };
  rightCheek: { [LABEL.PIGMENT]: string; [LABEL.PORE]: string };
  leftCheek: { [LABEL.PIGMENT]: string; [LABEL.PORE]: string };
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
    [LABEL.PIGMENT]: STATUS;
    [LABEL.ELASTIC]: STATUS;
    [LABEL.WRINKLE]: STATUS;
    [LABEL.PORE]: STATUS;
    [LABEL.DRY]: STATUS;
  };
};
