import Header from '@/components/common/header/header';
import HeroSection from '@/components/homePage/heroSection/heroSection';
import * as S from './homePage.style';

export default function HomePage() {
  return (
    <S.Container>
      <Header />
      <HeroSection />
    </S.Container>
  );
}
