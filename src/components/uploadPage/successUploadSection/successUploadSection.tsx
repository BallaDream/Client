import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { useUpload } from '@/hooks/useUpload';

import SpinnerOverlay from '@/components/common/overlay/SpinnerOverlay';

import * as S from './successUploadSection.style';

import OnAnalyzeIcon from '@/assets/icons/onAnalyze.svg?react';
import ReuploadIcon from '@/assets/icons/re_upload.svg?react';

export default function SuccessUploadSection({ file, setFile }: { file: File | null; setFile: Dispatch<SetStateAction<File | null>> }) {
  const { mutate, isPending } = useUpload();

  const handleAnalyze = () => {
    mutate(file as File);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  if (!file) return null;
  const previewUrl = URL.createObjectURL(file);

  return (
    <S.Container>
      {isPending && <SpinnerOverlay />}
      <S.ImagePreview src={previewUrl || '/'} alt="" />
      <S.ButtonGroup>
        <S.ActionButton onClick={handleAnalyze}>
          <OnAnalyzeIcon />
          <span>분석시작</span>
        </S.ActionButton>
        <input type="file" accept="image/jpeg" id="fileInput" style={{ display: 'none', cursor: 'pointer' }} onChange={handleFileChange} />
        <label htmlFor="fileInput">
          <S.ActionButton as="span">
            <ReuploadIcon />
            <span>다시 업로드</span>
          </S.ActionButton>
        </label>
      </S.ButtonGroup>
    </S.Container>
  );
}
