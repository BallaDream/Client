import IdleUploadSection from '@/components/uploadPage/idleUploadSection/idleUploadBox';

import * as S from './uploadSection.style';
import ErrorUploadSection from '../errorUploadSection/errorUploadSection';
import SuccessUploadSection from '../successUploadSection/successUploadSection';

import { useAppSelector } from '@/store/hooks';

export default function UploadSection() {
  const status = useAppSelector((state) => state.upload);
  console.log(status);
  return (
    <S.Container>
      {status.status == 'idle' && <IdleUploadSection />}
      {status.status == 'success' && <SuccessUploadSection />}
      {status.status == 'error' && <ErrorUploadSection />}
    </S.Container>
  );
}
