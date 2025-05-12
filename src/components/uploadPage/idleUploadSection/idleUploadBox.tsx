import * as S from './idleUploadBox.style';

import ImgIcon from '@/assets/icons/img_icon.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';

export default function IdleUploadSection() {
  return (
    <S.Conatiner>
      <S.DottedContainer>
        <ImgIcon />
        <S.Button>
          <p>사진 추가</p>
          <PlusIcon />
        </S.Button>
      </S.DottedContainer>
    </S.Conatiner>
  );
}
