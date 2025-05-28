import { STATUS } from '@/enums/enums';

import { getStatus } from '@/utils/map';

import * as S from './diagnosisSummary.style';

interface ISummaryBarProps {
  value: STATUS;
}

const levelColorMap: Record<STATUS, string> = {
  [STATUS.CLEAR]: '#A8E6CF', // green
  [STATUS.CAUTION]: '#FFD97D', // yellow
  [STATUS.WARNING]: '#FF8A80', // red
};

export default function SummaryBar({ value }: ISummaryBarProps) {
  return (
    <S.Bar>
      {[STATUS.CLEAR, STATUS.CAUTION, STATUS.WARNING].map((status) => (
        <S.Segment key={status} $color={levelColorMap[status]} $width="33.33%" $isOpacity={value === status}>
          {value === status && getStatus(value)}
        </S.Segment>
      ))}
    </S.Bar>
  );
}
