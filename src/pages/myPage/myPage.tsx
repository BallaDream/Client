import { useParams } from 'react-router-dom';

import HistorySection from '@/components/myPage/historySection/historySection';
import InterestSection from '@/components/myPage/interestSection/interestSection';
import ProfileSection from '@/components/myPage/profileSection/profileSection';

import * as S from './myPage.style';

export default function MyPage() {
  const { tabIndex } = useParams<{ tabIndex?: string }>();
  const currentTab = tabIndex || '0';

  return (
    <S.Container>
      {currentTab === '0' && <ProfileSection />}
      {currentTab === '1' && <HistorySection />}
      {currentTab === '2' && <InterestSection />}
    </S.Container>
  );
}
