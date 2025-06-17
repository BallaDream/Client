import { useSearchParams } from 'react-router-dom';

import { useKakaoAuth } from '@/hooks/useKakaoAuth';

import SpinnerOverlay from '@/components/common/overlay/SpinnerOverlay';

import * as S from './kakaoCallback.style';

export default function KakaoCallback() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useKakaoAuth(code);

  return (
    <S.Container>
      <SpinnerOverlay text="잠시만 기다려주세요" />
    </S.Container>
  );
}
