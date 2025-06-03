import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import * as S from './idleUploadSection.style';

import ImgIcon from '@/assets/icons/img_icon.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import { uploadSuccess } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export default function IdleUploadSection({ setFile }: { setFile: Dispatch<SetStateAction<File | null>> }) {
  const dispatch = useAppDispatch();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      dispatch(uploadSuccess());
    }
  };

  return (
    <S.Conatiner>
      <S.DottedContainer>
        <ImgIcon />
        <input type="file" accept="image/jpeg" id="fileInput" style={{ display: 'none', cursor: 'pointer' }} onChange={handleFileChange} />
        <label htmlFor="fileInput">
          <S.Button as="span">
            <p>사진 추가</p>
            <PlusIcon />
          </S.Button>
        </label>
      </S.DottedContainer>
    </S.Conatiner>
  );
}
