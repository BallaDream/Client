import type { RadarSliceTooltipProps } from '@nivo/radar';
import { ResponsiveRadar } from '@nivo/radar';

import type { TGetDiagnoseInfoResponse } from '@/types/resultPage/result';
import { LABEL, STATUS } from '@/enums/enums';

import * as S from './diagnosisSummary.style';
import { scoreToStatus } from '@/utils/scoreToStatus';

// STATUS → 점수 매핑
const levelToScore: Record<string, number> = {
  [STATUS.CLEAR]: 100,
  [STATUS.CAUTION]: 66,
  [STATUS.WARNING]: 33,
};
// LABEL → 한글 라벨 매핑
const labelKeyMap: Record<string, string> = {
  [LABEL.PIGMENT]: '색소침착',
  [LABEL.WRINKLE]: '주름',
  [LABEL.PORE]: '모공',
  [LABEL.DRY]: '수분',
  [LABEL.ELASTIC]: '탄력',
};

interface IProps {
  data?: TGetDiagnoseInfoResponse['totalResult'];
}

export default function SkinRadarChart({ data }: IProps) {
  if (!data) return null;

  // totalResult → nivo radar용 포맷으로 변환
  const radarData = Object.entries(data).map(([label, status]) => ({
    item: labelKeyMap[label] || label,
    사용자: levelToScore[status],
  }));

  function CustomTooltip({ index, data: res }: RadarSliceTooltipProps) {
    return (
      <div
        style={{
          background: '#fff',
          padding: '6px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: 'fit-content',
          whiteSpace: 'nowrap', // 줄바꿈 방지 (옵션)
        }}
      >
        {res.map((d) => (
          <div key={d.id}>
            <strong>{index}</strong>: {scoreToStatus(d.value)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <S.ChartContainer style={{ height: 400 }}>
      <ResponsiveRadar
        data={radarData}
        keys={['사용자']}
        indexBy="item"
        maxValue={100}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={3}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={8}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        colors={(d) => (d.key === '사용자' ? '#3A4B9A' : '#ccc')}
        fillOpacity={0.4}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
          },
        ]}
        theme={{
          legends: {
            text: {
              fontSize: 14,
              fontWeight: 300,
              fontFamily: 'Pretendard',
            },
          },
          axis: {
            ticks: {
              text: {
                fontSize: 16,
                fontWeight: 400,
                fontFamily: 'Pretendard',
              },
            },
          },
        }}
        sliceTooltip={CustomTooltip}
      />
    </S.ChartContainer>
  );
}
