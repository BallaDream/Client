import type { ChangeEvent } from 'react';

import { useUpload } from '@/hooks/useUpload';

import * as S from './idleUploadBox.style';

import ImgIcon from '@/assets/icons/img_icon.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';

export default function IdleUploadSection() {
  const { mutate } = useUpload();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      mutate(file);
    }
  };

  return (
    <S.Conatiner>
      <S.DottedContainer>
        <ImgIcon />
        <S.Button onClick={handleFileChange}>
          <p>사진 추가</p>
          <PlusIcon />
        </S.Button>
      </S.DottedContainer>
    </S.Conatiner>
  );
}
