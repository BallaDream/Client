import * as S from './diagnosisSection.style';
import FaceStatusMap from './faceStatusMap';
import HeaderText from '../headerText/headerText';

export default function DiagnosisSection() {
  return (
    <S.Conatiner>
      <HeaderText text="닉네임" />
      <FaceStatusMap />
    </S.Conatiner>
  );
}
