import Header from '@/components/common/header/header';
import Footer from '@/components/common/footer/footer';
import HeroSection from '@/components/homePage/heroSection/heroSection';
import ArrowDownIcon from '@/assets/icons/arrow_down.svg?react';
import IntroSection from '@/components/homePage/introSection/introSection';
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
      <Footer />
    </S.Container>
  );
}
