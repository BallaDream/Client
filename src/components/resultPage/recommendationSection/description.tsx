import type { STATUS } from '@/enums/enums';

import { getStatus, statusColorMap } from '@/utils/map';

import * as S from './recommendationSection.style';

import { useAppSelector } from '@/store/hooks';

export default function Description() {
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);
  return (
    <S.DescriptionContainer>
      <S.DescriptionLabel>
        <p style={{ color: statusColorMap[selectedQuery.level as STATUS] }}>{getStatus(selectedQuery.level as STATUS)}</p>
        <p>단계</p>
      </S.DescriptionLabel>
      <>설명이요</>
    </S.DescriptionContainer>
  );
}
