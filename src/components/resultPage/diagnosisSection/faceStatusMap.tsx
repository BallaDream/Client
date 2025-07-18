import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Xarrow from 'react-xarrows';

import type { IFaceStatus } from '@/types/resultPage/result';
import type { LABEL, STATUS } from '@/enums/enums';

import { getStatusIcon } from '@/utils/getStatusIcon';
import { getLabel, getStatus, getWorstStatusColor } from '@/utils/map';
import { transformToFaceStatus } from '@/utils/transfrom';

import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import * as S from './diagnosisSection.style';

export default function FaceStatusMap() {
  const { diagnoseId = '0' } = useParams<{ diagnoseId: string }>();

  //마우스 툴팁
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '' });
  const [currentHotspotId, setCurrentHotspotId] = useState<keyof IFaceStatus | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, title: string, id: keyof IFaceStatus) => {
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
    { id: 'glabella', Area: '미간', style: { top: '33%', width: '105px', height: '45px', left: '50%' } },
    { id: 'rightPerocular', Area: '오른쪽 눈가', style: { top: '37%', width: '44px', height: '55px', left: '35%' } },
    { id: 'leftPerocular', Area: '왼쪽 눈가', style: { top: '37%', width: '44px', height: '55px', left: '65%' } },
    { id: 'rightCheek', Area: '오른쪽 볼', style: { top: '50%', width: '75px', height: '77px', left: '38%' } },
    { id: 'leftCheek', Area: '왼쪽 볼', style: { top: '50%', width: '75px', height: '77px', left: '62%' } },
    { id: 'lip', Area: '입술', style: { top: '58.5%', width: '125px', height: '55px', left: '50%' } },
    { id: 'chin', Area: '턱밑', style: { top: '68%', width: '85px', height: '37px', left: '50%' } },
  ];

  // api 데이터
  const { data, isLoading } = useDiagnoseInfo({ diagnoseId });

  // 로딩처리
  if (isLoading || !data) return <div />;
  const status: IFaceStatus = transformToFaceStatus(data.specificResult);

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
        {currentHotspotId && (
          <ul>
            {Object.entries(status[currentHotspotId] as Record<LABEL, STATUS>).map(([key, value]) => (
              <S.TooltipList key={key}>
                <S.TooltipStatusLabel>{getLabel(key as LABEL)}:&nbsp;</S.TooltipStatusLabel>
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
