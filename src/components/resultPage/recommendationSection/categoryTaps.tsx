import { useParams } from 'react-router-dom';

import { LABEL, STATUS } from '@/enums/enums';

import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import * as S from './recommendationSection.style';

import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const categories = ['색소침착', '모공', '주름', '탄력', '수분'] as const;

const categoryToDiagnoseType = {
  색소침착: LABEL.PIGMENT,
  주름: LABEL.WRINKLE,
  모공: LABEL.PORE,
  수분: LABEL.DRY,
  탄력: LABEL.ELASTIC,
} as const;

// 역 매핑
const diagnoseTypeToCategory = Object.fromEntries(Object.entries(categoryToDiagnoseType).map(([kor, eng]) => [eng, kor])) as Record<LABEL, string>;

export default function CategoryTabs() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);

  const { diagnoseId = '0' } = useParams<{ diagnoseId: string }>();
  const { data } = useDiagnoseInfo({ diagnoseId });

  const handleCategoryClick = (category: string) => {
    const diagnoseType = categoryToDiagnoseType[category as keyof typeof categoryToDiagnoseType];
    const level = data?.totalResult?.[diagnoseType] || STATUS.CLEAR;

    // 선택된 탭과 같으면 리턴
    if (selectedQuery.diagnoseType === diagnoseType) return;

    dispatch(
      setQuery({
        ...selectedQuery,
        diagnoseType,
        step: 0,
        level,
      }),
    );
  };

  return (
    <S.Tabs>
      {categories.map((category) => (
        <S.Tab
          key={category}
          $isActive={diagnoseTypeToCategory[selectedQuery.diagnoseType as LABEL] === category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </S.Tab>
      ))}
    </S.Tabs>
  );
}
