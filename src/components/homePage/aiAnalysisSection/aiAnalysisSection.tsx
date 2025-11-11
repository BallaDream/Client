// aiAnalysisSection.tsx
import { motion } from 'framer-motion';

import { fadeInUp, staggerContainer } from '@/utils/animationVariants';

import * as S from './aiAnalysisSection.style';

export default function AiAnalysisSection() {
  return (
    <S.Container as={motion.section} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
      <motion.div variants={fadeInUp}>
        <S.Title>AI 피부분석이란?</S.Title>
        <S.TextGroup>
          <S.Description>
            사용자의 얼굴 사진을 기반으로 피부 상태를 분석하여 <br />
            <b>색소침착, 주름, 수분, 탄력, 모공 등</b> 주요 지표별로 <b>피부 등급을 산출</b>합니다. <br />
            <b>분석 결과에 따라 예방/권고/필수 3단계</b>로 나누어, 가장 필요한 <b>화장품 성분과 제품</b>을 추천합니다.
          </S.Description>
        </S.TextGroup>
      </motion.div>

      <S.CardContainer as={motion.div} variants={staggerContainer}>
        {[1, 2, 3].map((_, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <S.Card $center={i === 1} $wide={i === 1}>
              <S.CardTitle>
                {i === 0 && '피부 분석 결과 예시'}
                {i === 1 && '피부 고민 부위 설명'}
                {i === 2 && '화장품 추천 예시'}
              </S.CardTitle>
              <S.ImageWrapper>
                <S.CardImage src={`/img/descript${i + 1}.png`} alt={`카드${i + 1}`} />
              </S.ImageWrapper>
            </S.Card>
          </motion.div>
        ))}
      </S.CardContainer>
    </S.Container>
  );
}
