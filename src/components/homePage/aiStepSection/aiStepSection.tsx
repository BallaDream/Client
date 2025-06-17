import * as S from './aiStepSection.style';

export default function AiStepSection() {
  return (
    <S.Container>
      <S.SectionTitle>Ai 피부분석 진행단계</S.SectionTitle>
      <S.StepWrapper>
        <S.StepBox>
          <S.StepTop>
            <S.StepImage src="/img/step1.png" alt="1단계: 사진 업로드" />
            <S.StepTitle>1단계: 사진 업로드</S.StepTitle>
          </S.StepTop>
          <S.StepDescription>설명에 맞추어 사진 촬영을 하여 사진을 업로드해 주세요.</S.StepDescription>
        </S.StepBox>

        <S.StepBox>
          <S.StepTop>
            <S.StepImage src="/img/step2.png" alt="2단계: 분석 및 진단" />
            <S.StepTitle>2단계: 분석 및 진단</S.StepTitle>
          </S.StepTop>
          <S.StepDescription>AI가 주름, 탄력, 색소침착 등 주요 부위를 정밀 분석합니다.</S.StepDescription>
        </S.StepBox>

        <S.StepBox>
          <S.StepTop>
            <S.StepImage src="/img/step3.png" alt="3단계: 제품 추천" />
            <S.StepTitle>3단계: 제품 추천</S.StepTitle>
          </S.StepTop>
          <S.StepDescription>피부 문제별로 필요한 성분을 포함한 맞춤 화장품을 추천해 드립니다.</S.StepDescription>
        </S.StepBox>
      </S.StepWrapper>
    </S.Container>
  );
}
