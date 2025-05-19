import type { CSSProperties } from 'react';
import { useState } from 'react';
import Xarrow from 'react-xarrows';

import { getStatusIcon } from '@/utils/getStatusIcon';
import { getLabel, getStatus, getWorstStatusColor } from '@/utils/map';

import * as S from './diagnosisSection.style';

// status 데이터
interface IFaceStatus {
  forehead: { pigmentation: string; wringkle: string };
  gtitlelus: { pigmentation: string; wringkle: string };
  lip: { dryness: string };
  chin: { sagging: string };
  rightPerocular: { wringkle: string };
  leftPerocular: { wringkle: string };
  rightCheek: { pigmentation: string; pore: string };
  leftCheek: { pigmentation: string; pore: string };
}

const status: IFaceStatus = {
  forehead: { pigmentation: 'Preventive', wringkle: 'Essential' },
  gtitlelus: { pigmentation: 'Preventive', wringkle: 'Essential' },
  lip: { dryness: 'Essential' },
  chin: { sagging: 'Preventive' },
  rightPerocular: { wringkle: 'Recommended' },
  leftPerocular: { wringkle: 'Preventive' },
  rightCheek: { pigmentation: 'Essential', pore: 'Recommended' },
  leftCheek: { pigmentation: 'Preventive', pore: 'Recommended' },
};

// 메인 컴포넌트
export default function FaceStatusMap() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '' });
  const [currentHotspotId, setCurrentHotspotId] = useState<keyof IFaceStatus | null>(null);

  const handleMouseEnter = (e: MouseEvent, title: string, id: keyof IFaceStatus) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const tooltipX = rect.right + 12;
    const tooltipY = rect.top + rect.height / 2;

    setTooltip({ visible: true, x: tooltipX, y: tooltipY, title });
    setCurrentHotspotId(id);
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
    setCurrentHotspotId(null);
  };

  // Hotspot 설정
  const hotspots: { id: keyof IFaceStatus; Area: string; style: CSSProperties }[] = [
    { id: 'forehead', Area: '이마', style: { top: '20%', width: '155px', height: '65px', left: '50%' } },
    { id: 'gtitlelus', Area: '미간', style: { top: '33%', width: '105px', height: '45px', left: '50%' } },
    { id: 'rightPerocular', Area: '오른쪽 눈가', style: { top: '37%', width: '44px', height: '55px', left: '35%' } },
    { id: 'leftPerocular', Area: '왼쪽 눈가', style: { top: '37%', width: '44px', height: '55px', left: '65%' } },
    { id: 'rightCheek', Area: '오른쪽 볼', style: { top: '50%', width: '75px', height: '77px', left: '38%' } },
    { id: 'leftCheek', Area: '왼쪽 볼', style: { top: '50%', width: '75px', height: '77px', left: '62%' } },
    { id: 'lip', Area: '입술', style: { top: '58.5%', width: '125px', height: '55px', left: '50%' } },
    { id: 'chin', Area: '턱밑', style: { top: '68%', width: '85px', height: '37px', left: '50%' } },
  ];

  return (
    <S.FaceStatusMapContainer>
      {hotspots.map(({ id, Area, style }) => (
        <S.Hotspot
          key={id}
          id={id}
          style={style}
          onMouseEnter={(e) => handleMouseEnter(e, Area, id)}
          onMouseLeave={handleMouseLeave}
          color={getWorstStatusColor(status[id])}
        />
      ))}

      {/* 툴팁 */}
      <S.Tooltip $visible={tooltip.visible} $top={tooltip.y} $left={tooltip.x} id="tooltip">
        <S.TooltipTitle>{tooltip.title}</S.TooltipTitle>
        {currentHotspotId && status[currentHotspotId] && (
          <ul>
            {Object.entries(status[currentHotspotId]).map(([key, value]) => (
              <S.TooltipList key={key}>
                <S.TooltipStatusLabel>{getLabel(key)}:&nbsp;</S.TooltipStatusLabel>
                <S.TooltipStatusText>
                  {getStatus(value)}&nbsp;
                  {getStatusIcon(value.trim())}
                </S.TooltipStatusText>
              </S.TooltipList>
            ))}
          </ul>
        )}
      </S.Tooltip>

      {/* 화살표 연결선 */}
      {tooltip.visible && currentHotspotId && (
        <Xarrow start={currentHotspotId} end="tooltip" color="black" strokeWidth={1} headSize={0} showHead={false} path="straight" />
      )}
    </S.FaceStatusMapContainer>
  );
}
