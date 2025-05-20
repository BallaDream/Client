import * as S from './diagnosisSummary.style';
import SummaryBar from './SummaryBar';

export default function LabelSummary() {
  const data = [
    { label: '색소침착', level: 'Recommended' },
    { label: '주름', level: 'Preventive' },
    { label: '모공', level: 'Recommended' },
    { label: '수분', level: 'Recommended' },
    { label: '탄력', level: 'Essential' },
  ] as const;

  return (
    <S.SummaryWrapper>
      <S.Title>피부 상태 요약</S.Title>
      {data.map((item) => (
        <div key={item.label}>
          <div>{item.label}</div>
          <SummaryBar value={item.level} />
        </div>
      ))}
    </S.SummaryWrapper>
  );
}
