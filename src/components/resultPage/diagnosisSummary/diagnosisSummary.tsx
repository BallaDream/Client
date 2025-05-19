import * as S from './diagnosisSummary.style';
import LabelSummary from './labelSummary';
import SkinRadarChart from './skinRadarChart';

export default function DiagnosisSummary() {
  return (
    <S.Container>
      <SkinRadarChart />
      <LabelSummary />
    </S.Container>
  );
}
