import type { TGetDiagnoseInfoResponse } from '@/types/resultPage/result';

import * as S from './diagnosisSummary.style';
import SummaryBar from './summaryBar';

interface IProps {
  data?: TGetDiagnoseInfoResponse['totalResult'];
}

// LABEL enum key → 한글 label 매핑
const labelKeyMap: Record<string, string> = {
  PIGMENT: '색소침착',
  WRINKLE: '주름',
  PORE: '모공',
  DRY: '수분',
  ELASTIC: '탄력',
};

export default function LabelSummary({ data }: IProps) {
  if (!data) return null;

  return (
    <S.SummaryWrapper>
      <S.Title>피부 상태 요약</S.Title>
      {Object.entries(data).map(([key, status]) => {
        const label = labelKeyMap[key] ?? key;
        return (
          <div key={key}>
            <div>{label}</div>
            <SummaryBar value={status} />
          </div>
        );
      })}
    </S.SummaryWrapper>
  );
}
