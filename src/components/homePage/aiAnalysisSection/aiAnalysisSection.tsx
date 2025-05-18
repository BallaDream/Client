import * as S from './aiAnalysisSection.style';

export default function AiAnalysisSection() {
  return (
    <S.Container>
      <S.Title>AI 피부분석이란?</S.Title>
      <S.TextGroup>
        <S.Description>
          사용자의 얼굴 사진을 기반으로 피부 상태를 분석하여 <br />
          <b>색소침착, 주름, 수분, 탄력, 모공 등</b> 주요 지표별로 <b>피부 등급을 산출</b>합니다. <br />
          <b>분석 결과에 따라 예방/권고/필수 3단계</b>로 나누어, 가장 필요한 <b>화장품 성분과 제품</b>을 추천합니다.
        </S.Description>
      </S.TextGroup>
      <S.CardContainer>
        <S.Card>
          <S.CardTitle>피부 분석 결과 예시</S.CardTitle>
          <S.CardPlaceholder>이미지 자리</S.CardPlaceholder>
        </S.Card>
        <S.Card>
          <S.CardTitle>피부 고민 부위 설명</S.CardTitle>
          <S.CardPlaceholder>이미지 자리</S.CardPlaceholder>
        </S.Card>
        <S.Card>
          <S.CardTitle>화장품 추천 예시</S.CardTitle>
          <S.CardPlaceholder>이미지 자리</S.CardPlaceholder>
        </S.Card>
      </S.CardContainer>
    </S.Container>
  );
}
