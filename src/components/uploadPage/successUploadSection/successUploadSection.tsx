import * as S from './successUploadSection.style';

import OnAnalyzeIcon from '@/assets/icons/onAnalyze.svg?react';
import ReuploadIcon from '@/assets/icons/re_upload.svg?react';

export default function SuccessUploadSection() {
  return (
    <S.Container>
      <S.ImagePreview src={'/'} alt="" />
      <S.ButtonGroup>
        <S.ActionButton onClick={() => {}}>
          <ReuploadIcon />
          <span>분석시작</span>
        </S.ActionButton>
        <S.ActionButton onClick={() => {}}>
          <OnAnalyzeIcon />
          <span>다시 업로드</span>
        </S.ActionButton>
      </S.ButtonGroup>
    </S.Container>
  );
}
