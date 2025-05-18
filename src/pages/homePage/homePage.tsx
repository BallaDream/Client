import HeroSection from '@/components/homePage/heroSection/heroSection';
import * as S from './homePage.style';

export default function HomePage() {
  return (
    <S.Container>
      {/* 추후 Header는 공용으로 따로 넣을 예정 */}
      <HeroSection />
    </S.Container>
  );
}
