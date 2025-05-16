import { useState } from 'react';

import * as S from './diagnosisSection.style';

export default function FaceStatusMap() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

  const handleMouseEnter = (e: MouseEvent, label: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const tooltipX = rect.right + 12; // 오른쪽에 12px 간격
    const tooltipY = rect.top + rect.height / 2; // 수직 중앙

    setTooltip({
      visible: true,
      x: tooltipX,
      y: tooltipY,
      text: label,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };
  // cheek, lip, chin, forehead, glabellus, perocular
  return (
    <S.FaceStatusMapContainer>
      {/* 이마 */}
      <S.Hotspot
        style={{ top: '20%', width: '155px', height: '65px', left: '50%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '이마')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 미간 */}
      <S.Hotspot
        style={{ top: '33%', width: '105px', height: '45px', left: '50%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '미간')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 눈가 */}
      <S.Hotspot
        style={{ top: '37%', width: '44px', height: '55px', left: '35%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '오른쪽 눈가')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      <S.Hotspot
        style={{ top: '37%', width: '44px', height: '55px', left: '65%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '왼쪽 눈가')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 볼 */}
      <S.Hotspot
        style={{ top: '50%', width: '75px', height: '77px', left: '38%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '오른쪽 볼')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      <S.Hotspot
        style={{ top: '50%', width: '75px', height: '77px', left: '62%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '왼쪽 볼')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 입술 */}
      <S.Hotspot
        style={{ top: '58.5%', width: '125px', height: '55px', left: '50%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '입술')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 턱밑 */}
      <S.Hotspot
        style={{ top: '68%', width: '85px', height: '37px', left: '50%', transform: 'translateX(-50%)' }}
        onMouseEnter={(e) => handleMouseEnter(e, '턱밑')}
        onMouseLeave={handleMouseLeave}
        color="rgba(155, 222, 183, 0.7)"
      />
      {/* 툴팁 */}
      <S.Tooltip visible={tooltip.visible} top={tooltip.y} left={tooltip.x}>
        {tooltip.text}
      </S.Tooltip>
    </S.FaceStatusMapContainer>
  );
}
