import Footer from '@/components/common/footer/footer';
import Header from '@/components/common/header/header';
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
      <Header />
      <HeroSection />
      <S.ArrowWrapper>
        <ArrowDownIcon />
      </S.ArrowWrapper>
      <IntroSection />
      <AiAnalysisSection />
      <AiValiditySection />
      <AiStepSection />
      <FaqSection />
      <Footer />
    </S.Container>
  );
}
