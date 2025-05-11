import UploadInstructionsHeader from '@/components/uploadPage/uploadInstructionsHeader/uploadInstructionsHeader';
import UploadSection from '@/components/uploadPage/uploadSection/uploadSection';

import * as S from './uploadPage.style';

export default function UploadPage() {
  return (
    <S.Container>
      <UploadInstructionsHeader />
      <UploadSection />
      <p>조심문구들</p>
    </S.Container>
  );
}
