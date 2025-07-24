import * as S from './diagnosisSection.style';
import FaceStatusMap from './faceStatusMap';
import HeaderText from '../headerText/headerText';

import { useAppSelector } from '@/store/hooks';

export default function DiagnosisSection() {
  const nickname = useAppSelector((state) => state.auth.nickname);
  return (
    <S.Container>
      <HeaderText text={`${nickname} 님의 피부진단 결과`} />

      <FaceStatusMap />
    </S.Container>
  );
}
