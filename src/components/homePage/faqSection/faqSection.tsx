import FaqItem from './fapItem';
import * as S from './faqSection.style';

const faqData = [
  {
    question: 'AI피부 분석은 언제 하면 가장 정확한가요?',
    answer: (
      <>
        AI 피부 분석은 <strong>피부 수분, 주름, 색소침착 등 다양한 요소를 정밀하게 분석</strong>하는 서비스입니다.
        <br />
        가장 정확한 결과를 얻기 위해서는 <strong>세안 후 스킨케어 제품을 바르기 전, 민낯 상태</strong>로 정면 사진을 촬영해 주세요.
      </>
    ),
  },
  {
    question: '제품 추천은 어떤 방식으로 이루어지나요?',
    answer: (
      <>
        AI가 분석한 피부 문제(예: 색소침착, 주름, 탄력 등)에 따라 <strong>필요한 성분을 포함한 화장품</strong>을
        <br />
        등급별(예방/권고/필수)로 추천해 드려요. 가격, 제형 필터도 함께 활용하실 수 있어요!
      </>
    ),
  },
  {
    question: 'AI피부 분석은 어떻게 이루어 지나요?',
    answer: (
      <>
        사용자의 얼굴 사진을 AI가 분석해 이마, 미간, 눈가, 볼, 입술, 턱 부위의 <strong>주요 피부 문제를 수치화</strong>해요.
        <br />
        분석 결과는 피부 등급으로 나타나며, 이를 기준으로 맞춤형 추천이 진행됩니다.
      </>
    ),
  },
  {
    question: '피부 업로드를 계속 시도하여도 업로드가 안돼요.',
    answer: (
      <>
        ● 이미지 용량이 너무 크거나 작을 경우 오류가 발생할 수 있어요.
        <br />● 얼굴이 흐리게 나왔거나 정면이 아닐 경우에도 분석이 어려워요.
        <br />
        촬영 예시에 맞추어 다시 재촬영 해주세요!
      </>
    ),
  },
  {
    question: 'AI피부분석 결과는 어디서 확인 하나요?',
    answer: (
      <>
        분석이 완료되면, <strong>마이페이지 → 진단 기록</strong>에서
        <br />
        날짜별로 결과 요약과 추천 제품을 확인하실 수 있어요.
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <S.Section>
      <S.Title>자주 묻는 질문</S.Title>
      <S.List>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </S.List>
    </S.Section>
  );
}
