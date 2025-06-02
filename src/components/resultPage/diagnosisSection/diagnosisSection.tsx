import * as S from './diagnosisSection.style';
import FaceStatusMap from './faceStatusMap';
import HeaderText from '../headerText/headerText';

export default function DiagnosisSection() {
  return (
    <S.Container>
      <HeaderText text="닉네임  님의 피부진단 결과" />

      <FaceStatusMap />
    </S.Container>
  );
}
