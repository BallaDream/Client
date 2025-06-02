import { description } from '@/constants/terms';
import type { STATUS } from '@/enums/enums';

import { getStatus, statusColorMap } from '@/utils/map';

import * as S from './recommendationSection.style';

import { useAppSelector } from '@/store/hooks';

// --- 타입 정의
type TDiagnoseType = keyof typeof description;
type TLevelType = keyof (typeof description)[TDiagnoseType];

export default function Description() {
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);

  const diagnoseType = selectedQuery.diagnoseType as TDiagnoseType;
  const level = selectedQuery.level as TLevelType;

  return (
    <S.DescriptionContainer>
      <S.DescriptionLabel>
        <p style={{ color: statusColorMap[level as STATUS] }}>{getStatus(level as STATUS)}</p>
        <p>단계</p>
      </S.DescriptionLabel>
      {/* 타입 안전한 접근 */}
      <>{description[diagnoseType][level]}</>
    </S.DescriptionContainer>
  );
}
