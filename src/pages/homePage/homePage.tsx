import { motion } from 'framer-motion';

import AiAnalysisSection from '@/components/homePage/aiAnalysisSection/aiAnalysisSection';
import AiStepSection from '@/components/homePage/aiStepSection/aiStepSection';
import AiValiditySection from '@/components/homePage/aiVailditySection/aiVailditySection';
import FaqSection from '@/components/homePage/faqSection/faqSection';
import HeroSection from '@/components/homePage/heroSection/heroSection';
import IntroSection from '@/components/homePage/introSection/introSection';

import * as S from './homePage.style';

import ArrowDownIcon from '@/assets/icons/arrow_down.svg?react';

export default function HomePage() {
  return (
    <S.Container>
      <HeroSection />
      <S.ArrowWrapper
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: [0, 10, 0] },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <ArrowDownIcon />
      </S.ArrowWrapper>
      <IntroSection />
      <AiAnalysisSection />
      <AiValiditySection />
      <AiStepSection />
      <FaqSection />
    </S.Container>
  );
}
