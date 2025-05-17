import { useState } from 'react';
import Xarrow from 'react-xarrows';

import * as S from './diagnosisSection.style';

interface IFaceStatus {
  forehead: { pigmentation: string; wringkle: string };
  gtitlelus: { pigmentation: string; wringkle: string };
  lip: { dryness: string };
  chin: { sagging: string };
  rightPerocular: { wringkle: string };
  leftPerocular: { wringkle: string };
  rightCheek: { pigment: string; pore: string };
  leftCheek: { pigment: string; pore: string };
}
const status: IFaceStatus = {
  forehead: { pigmentation: '예방', wringkle: '필수' },
  gtitlelus: { pigmentation: '예방', wringkle: '권고' },
  lip: { dryness: '예방' },
  chin: { sagging: '예방' },
  rightPerocular: { wringkle: '예방' },
  leftPerocular: { wringkle: '예방' },
  rightCheek: { pigment: '예방', pore: '예방' },
  leftCheek: { pigment: '예방', pore: '예방' },
};
export default function FaceStatusMap() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, title: '' });
  const [currentHotspotId, setCurrentHotspotId] = useState<keyof IFaceStatus | null>(null);

  const handleMouseEnter = (e: MouseEvent, title: string, id: keyof IFaceStatus) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const tooltipX = rect.right + 12;
    const tooltipY = rect.top + rect.height / 2;

    setTooltip({
      visible: true,
      x: tooltipX,
      y: tooltipY,
      title: title,
    });

    setCurrentHotspotId(id);
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
    setCurrentHotspotId(null);
  };
  // cheek, lip, chin, forehead, gtitlelus, perocular
  return (
    <S.FaceStatusMapContainer>
      {/* 이마 */}
      <S.Hotspot
        id="forehead"
        style={{ top: '20%', width: '155px', height: '65px', left: '50%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '이마', 'forehead')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 미간 */}
      <S.Hotspot
        id="gtitlelus"
        style={{ top: '33%', width: '105px', height: '45px', left: '50%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '미간', 'gtitlelus')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 눈가 */}
      <S.Hotspot
        id="rightPerocular"
        style={{ top: '37%', width: '44px', height: '55px', left: '35%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '오른쪽 눈가', 'rightPerocular')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      <S.Hotspot
        id="leftPerocular"
        style={{ top: '37%', width: '44px', height: '55px', left: '65%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '왼쪽 눈가', 'leftPerocular')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 볼 */}
      <S.Hotspot
        id="rightcheek"
        style={{ top: '50%', width: '75px', height: '77px', left: '38%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '오른쪽 볼', 'rightcheek')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      <S.Hotspot
        id="leftcheek"
        style={{ top: '50%', width: '75px', height: '77px', left: '62%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '왼쪽 볼', 'leftcheek')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 입술 */}
      <S.Hotspot
        id="lip"
        style={{ top: '58.5%', width: '125px', height: '55px', left: '50%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '입술', 'lip')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 턱밑 */}
      <S.Hotspot
        id="chin"
        style={{ top: '68%', width: '85px', height: '37px', left: '50%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '턱밑', 'chin')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />

      {/* 툴팁 */}
      <S.Tooltip visible={tooltip.visible} top={tooltip.y} left={tooltip.x} id="tooltip">
        <S.TooltipTitle>{tooltip.title}</S.TooltipTitle>
        {currentHotspotId && status[currentHotspotId] && (
          <ul>
            {Object.entries(status[currentHotspotId]).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        )}
      </S.Tooltip>

      {/* 연결선 */}
      {tooltip.visible && currentHotspotId && (
        <Xarrow start={currentHotspotId} end="tooltip" color="black" strokeWidth={1} headSize={0} showHead={false} path="straight" />
      )}
    </S.FaceStatusMapContainer>
  );
}
