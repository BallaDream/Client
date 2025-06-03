import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import * as S from './errorUploadSection.style';

import ReIcon from '@/assets/icons/re_img.svg?react';
import RefreshIcon from '@/assets/icons/refresh.svg?react';
import { uploadSuccess } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export default function ErrorUploadSection({ setFile }: { setFile: Dispatch<SetStateAction<File | null>> }) {
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
        <ReIcon />
        <input type="file" accept="image/jpeg" id="fileInput" style={{ display: 'none', cursor: 'pointer' }} onChange={handleFileChange} />
        <label htmlFor="fileInput">
          <S.Button>
            <p>다시 업로드</p>
            <RefreshIcon />
          </S.Button>
        </label>
      </S.DottedContainer>
    </S.Conatiner>
  );
}
