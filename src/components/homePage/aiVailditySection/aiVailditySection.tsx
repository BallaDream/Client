import * as S from './aiVailditySection.style';

export default function AiValiditySection() {
  return (
    <S.Section>
      <S.Title>AI 피부분석 타당성설명</S.Title>

      <S.Row>
        <S.ImageBox>
          <img src="/img/vail_first.png" alt="AI 분석 구조 시각화" />
        </S.ImageBox>
        <S.Text>
          약 530만개의 파라미터 개수로, 사람의 육안으로는 파악하기 어려운 미세한 피부 변화를 감지할 수 있습니다. 이로 인해 객관적이고 일관된 기준으로 피부
          상태를 분석할 수 있으며, 개인화된 결과물을 통해 피부 관리 솔루션을 제안하는 강력한 근거가 됩니다.
        </S.Text>
      </S.Row>

      <S.Row>
        <S.ImageBox>
          <img src="/img/vail_second.png" alt="AI 분석 속도" />
        </S.ImageBox>
        <S.Text>
          기존의 피부분석은 전문가와의 상담을 통해 얻을 수 있는 데이터를 필요로 했지만, AI는 전문가의 라벨링을 바탕으로 학습된 이미지 데이터를 기반으로 약 20초
          만에 결과를 도출할 수 있어, 시간과 비용 측면에서 매우 효율적입니다.
        </S.Text>
      </S.Row>
    </S.Section>
  );
}
