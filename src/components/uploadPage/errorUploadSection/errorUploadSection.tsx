import * as S from './errorUploadSection.style';

import ReIcon from '@/assets/icons/re_img.svg?react';
import RefreshIcon from '@/assets/icons/refresh.svg?react';

export default function ErrorUploadSection() {
  return (
    <S.Conatiner>
      <S.DottedContainer>
        <ReIcon />
        <S.Button>
          <p>다시 업로드</p>
          <RefreshIcon />
        </S.Button>
      </S.DottedContainer>
    </S.Conatiner>
  );
}
