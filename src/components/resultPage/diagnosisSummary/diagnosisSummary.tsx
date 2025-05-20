import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import * as S from './diagnosisSummary.style';
import LabelSummary from './labelSummary';
import SkinRadarChart from './skinRadarChart';

export default function DiagnosisSummary() {
  const { data } = useDiagnoseInfo({ diagnoseId: 1 });

  return (
    <S.Container>
      <SkinRadarChart data={data?.totalResult} />
      <LabelSummary data={data?.totalResult} />
    </S.Container>
  );
}
