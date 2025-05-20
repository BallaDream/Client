export type TGetSinglePresignedUrlValue = {
  diagnoseId: number;
};

export type TGetDiagnoseInfo = {
  specificResult: {
    wrinkleForeheadLevel: 'WARNING';
    elasticJawlineSaggingLevel: 'WARNING';
    pigmentForeheadLevel: 'WARNING';
    wrinkleGlabellaLevel: 'WARNING';
    wrinkleRightEyeLevel: 'WARNING';
    pigmentRightCheekLevel: 'WARNING';
    dryLipsLevel: 'WARNING';
    wrinkleLeftEyeLevel: 'WARNING';
    poreLeftCheekLevel: 'WARNING';
    pigmentLeftCheekLevel: 'WARNING';
    poreRightCheekLevel: 'WARNING';
  };
  totalResult: {
    PIGMENT: 'WARNING';
    ELASTIC: 'WARNING';
    WRINKLE: 'WARNING';
    PORE: 'WARNING';
    DRY: 'WARNING';
  };
};
