import { SyncLoader } from 'react-spinners';

import * as S from './SpinnerOverlay.style.ts';

export default function SpinnerOverlay() {
  return (
    <S.Overlay>
      <SyncLoader size={15} margin={6} color="#ffffff" speedMultiplier={1} />
      <S.Message>분석 중입니다...</S.Message>
    </S.Overlay>
  );
}
