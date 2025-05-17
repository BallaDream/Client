import * as S from './uploadTipsSection.style';
import UploadTipCard from '../uploadTipCard/uploadTipCard';

import NoGlassesIcon from '@/assets/icons/no_glasses.svg?react';
import NomakeupIcon from '@/assets/icons/nomakeup_face.svg?react';
import SunIcon from '@/assets/icons/sun.svg?react';
import TraceFaceIcon from '@/assets/icons/trace_face.svg?react';

export default function UploadTipsSection() {
  return (
    <S.Container>
      <UploadTipCard icon={<TraceFaceIcon />} lines={['화면 가득 차게', '얼굴은 정면']} colors={['gray', 'black']} />
      <UploadTipCard icon={<NomakeupIcon />} lines={['앞머리는 넘기고', '민낯은 필수']} colors={['gray', 'black']} />
      <UploadTipCard icon={<SunIcon />} lines={['밝은 공간에서', '기본 카메라로']} colors={['gray', 'black']} />
      <UploadTipCard icon={<NoGlassesIcon />} lines={['안경,마스크는', '벗어주세요.']} colors={['black', 'gray']} />
    </S.Container>
  );
}
