import * as S from './diagnosisSection.style';
import FaceStatusMap from './faceStatusMap';
import HeaderText from '../headerText/headerText';

export default function DiagnosisSection() {
  const nickname = localStorage.getItem('nickname');
  return (
    <S.Container>
      <HeaderText text={`${nickname} 님의 피부진단 결과`} />

      <FaceStatusMap />
    </S.Container>
  );
}
