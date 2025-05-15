import { useState } from 'react';

import * as S from './diagnosisSection.style';

import FaceImage from '/img/facemap.png'; // 원래 SVG의 PNG 원본

export default function FaceStatusMap() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

  const handleMouseEnter = (e: MouseEvent, label: string) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      text: label,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <S.FaceStatusMapContainer>
      <img src={FaceImage} alt="페이스맵" style={{ width: '100%' }} />
      {/* 이마 */}
      <S.Hotspot
        style={{ top: '10%', left: '40%', width: '20%', height: '10%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '이마')}
        onMouseLeave={handleMouseLeave}
      />
      {/* 코 */}
      <S.Hotspot
        style={{ top: '45%', left: '47%', width: '8%', height: '10%' }}
        onMouseEnter={(e) => handleMouseEnter(e, '코')}
        onMouseLeave={handleMouseLeave}
      />
      {/* 툴팁 */}
      <S.Tooltip visible={tooltip.visible} top={tooltip.y} left={tooltip.x}>
        {tooltip.text}
      </S.Tooltip>
    </S.FaceStatusMapContainer>
  );
}
