import { useState } from 'react';

import IdleUploadSection from '@/components/uploadPage/idleUploadSection/idleUploadSection';

import * as S from './uploadSection.style';
import ErrorUploadSection from '../errorUploadSection/errorUploadSection';
import SuccessUploadSection from '../successUploadSection/successUploadSection';

import { useAppSelector } from '@/store/hooks';

export default function UploadSection() {
  const status = useAppSelector((state) => state.upload);
  const [file, setFile] = useState<File | null>(null);

  return (
    <S.Container>
      {status.status == 'idle' && <IdleUploadSection setFile={setFile} />}
      {status.status == 'success' && <SuccessUploadSection file={file} setFile={setFile} />}
      {status.status == 'error' && <ErrorUploadSection setFile={setFile} />}
    </S.Container>
  );
}
