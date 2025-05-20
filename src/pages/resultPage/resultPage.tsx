import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import BottomActionBar from '@/components/resultPage/bottomActionBar/bottomActionBar';
import DiagnosisSection from '@/components/resultPage/diagnosisSection/diagnosisSection';
import DiagnosisSummary from '@/components/resultPage/diagnosisSummary/diagnosisSummary';
import RecommendationSection from '@/components/resultPage/recommendationSection/recommendationSection';

import * as S from './resultPage.style';

export default function resultPage() {
  const { data, isLoading, isError, error } = useDiagnoseInfo({ diagnoseId: 1 });

  return (
    <S.Container>
      <br />
      <div>
        <DiagnosisSection />
        <DiagnosisSummary />
        <RecommendationSection />
        <BottomActionBar />
      </div>
      <br />
    </S.Container>
  );
}
