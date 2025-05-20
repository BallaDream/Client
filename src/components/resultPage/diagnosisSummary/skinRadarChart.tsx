import { ResponsiveRadar } from '@nivo/radar';

import * as S from './diagnosisSummary.style';

type TLevel = '예방' | '권고' | '필수';

const levelToScore: Record<TLevel, number> = {
  예방: 33,
  권고: 66,
  필수: 100,
};

const data = [
  {
    item: '색소침착',
    사용자: levelToScore['권고'],
  },
  {
    item: '주름',
    사용자: levelToScore['예방'],
  },
  {
    item: '모공',
    사용자: levelToScore['권고'],
  },
  {
    item: '수분',
    사용자: levelToScore['권고'],
  },
  {
    item: '탄력',
    사용자: levelToScore['필수'],
  },
];

const keys = ['사용자'];

export default function SkinRadarChart() {
  return (
    <S.ChartContainer style={{ height: 400 }}>
      <ResponsiveRadar
        data={data}
        keys={keys}
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
        colors={{ scheme: 'set2' }}
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
      />
    </S.ChartContainer>
  );
}
