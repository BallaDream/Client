import UploadInstructionsHeader from '@/components/uploadPage/uploadInstructionsHeader/uploadInstructionsHeader';
import UploadSection from '@/components/uploadPage/uploadSection/uploadSection';
import UploadTipsSection from '@/components/uploadPage/uploadTipsSection/uploadTipsSection';

import * as S from './uploadPage.style';

export default function UploadPage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <UploadInstructionsHeader />

        <UploadSection />

        <UploadTipsSection />
      </S.ContentWrapper>
    </S.Container>
  );
}
