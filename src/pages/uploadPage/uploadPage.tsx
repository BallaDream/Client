import UploadInstructionsHeader from '@/components/uploadPage/uploadInstructionsHeader/uploadInstructionsHeader';

import * as S from './uploadPage.style';

export default function UploadPage() {
  return (
    <S.Container>
      <UploadInstructionsHeader />
      <p>업로드 섹션</p>
      <p>조심문구들</p>
    </S.Container>
  );
}
