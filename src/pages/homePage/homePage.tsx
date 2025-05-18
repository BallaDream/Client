import Header from '@/components/common/header/header';
import Footer from '@/components/common/footer/footer';
import HeroSection from '@/components/homePage/heroSection/heroSection';
import ArrowDownIcon from '@/assets/icons/arrow_down.svg?react';
import IntroSection from '@/components/homePage/introSection/introSection';
import AiAnalysisSection from '@/components/homePage/aiAnalysisSection/aiAnalysisSection';
import AiValiditySection from '@/components/homePage/aiVailditySection/aiVailditySection';
import AiStepSection from '@/components/homePage/aiStepSection/aiStepSection';
import FaqSection from '@/components/homePage/faqSection/faqSection';
import * as S from './homePage.style';

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
