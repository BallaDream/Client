import type { LABEL, STATUS } from '@/enums/enums';
// --- type
export interface IFaceStatus {
  forehead: { [LABEL.PIGMENT]: STATUS; [LABEL.WRINKLE]: STATUS };
  glabella: { [LABEL.WRINKLE]: STATUS };
  lip: { [LABEL.DRY]: STATUS };
  chin: { [LABEL.ELASTIC]: STATUS };
  rightPerocular: { [LABEL.WRINKLE]: STATUS };
  leftPerocular: { [LABEL.WRINKLE]: STATUS };
  rightCheek: { [LABEL.PIGMENT]: STATUS; [LABEL.PORE]: STATUS };
  leftCheek: { [LABEL.PIGMENT]: STATUS; [LABEL.PORE]: STATUS };
}

export interface IProduct {
  productId: number;
  productName: string;
  formulation: string;
  price: number;
  salesLink: string;
  imageLink: string;
  element: string[];
  interest: boolean;
}

// ---value

export type TPostDiagnoseInfoValue = {
  dryLipsScore: number;
  pigmentForeheadScore: number;
  pigmentLeftCheekScore: number;
  pigmentRightCheekScore: number;
  wrinkleForeheadScore: number;
  wrinkleGlabellaScore: number;
  wrinkleLeftEyeScore: number;
  wrinkleRightEyeScore: number;
  poreLeftCheekScore: number;
  poreRightCheekScore: number;
  elasticJawlineSaggingScore: number;
};

export type TGetDiagnoseInfoValue = {
  diagnoseId: string;
};

export type TGetRecomendationValue = {
  diagnoseType: string;
  level: string;
  step: number;
  minPrice?: number;
  maxPrice?: number;
  formulation?: string;
};
export type TPostInterestValue = {
  productId: number;
  diagnoseType: string;
};
export type TDeleteInterestValue = {
  productId: number;
  diagnoseType: string;
};
// ---response
export type TPostDiagnoseInfoResponse = {
  status: number;
  diagnoseId: number;
  message: string;
};

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

export type TGetRecommendationResponse = { data: IProduct[]; hasMore: boolean };

export type TInterestResponse = {
  status: number;
  message: string;
};
