import { useParams } from 'react-router-dom';

import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import * as S from './diagnosisSummary.style';
import LabelSummary from './labelSummary';
import SkinRadarChart from './skinRadarChart';

export default function DiagnosisSummary() {
  const { diagnoseId = '0' } = useParams<{ diagnoseId: string }>();

  const { data } = useDiagnoseInfo({ diagnoseId });

  return (
    <S.Container>
      <SkinRadarChart data={data?.totalResult} />
      <LabelSummary data={data?.totalResult} />
    </S.Container>
  );
}
