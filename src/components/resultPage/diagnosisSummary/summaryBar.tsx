import { getStatus } from '@/utils/map';

import * as S from './diagnosisSummary.style';

type TStatus = 'Preventive' | 'Recommended' | 'Essential';

interface ISummaryBarProps {
  value: TStatus;
}

const levelColorMap: Record<TStatus, string> = {
  Preventive: '#A8E6CF', // green
  Recommended: '#FFD97D', // yellow
  Essential: '#FF8A80', // red
};

export default function SummaryBar({ value }: ISummaryBarProps) {
  return (
    <S.Bar>
      {(['Preventive', 'Recommended', 'Essential'] as TStatus[]).map((status) => (
        <S.Segment key={status} $color={levelColorMap[status]} $width="33.33%" $isOpacity={value === status}>
          {value === status && getStatus(value)}
        </S.Segment>
      ))}
    </S.Bar>
  );
}
