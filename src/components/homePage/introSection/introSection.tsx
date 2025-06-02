import * as S from './introSection.style';

export default function IntroSection() {
  return (
    <S.Container>
      <S.LogoIcon />
      <S.Title>피부 데이터 기반 맞춤 추천 플랫폼 입니다.</S.Title>
      <S.Description>
        피부 고민은 사람마다 다릅니다. <br />
        <strong>BALLADREAM</strong>은 사진 기반 AI 분석을 통해 <br />
        사용자의 주름, 탄력, 모공 등 다양한 피부 문제를 진단하고, <br />
        그에 맞는 화장품 성분과 제품을 단계별로 추천합니다.
      </S.Description>
    </S.Container>
  );
}
