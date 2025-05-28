import { LABEL, STATUS } from '@/enums/enums';

import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import * as S from './recommendationSection.style';

import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const categories = ['색소침착', '주름', '모공', '수분', '탄력'] as const;

const categoryToDiagnoseType = {
  색소침착: LABEL.PIGMENT,
  주름: LABEL.WRINKLE,
  모공: LABEL.PORE,
  수분: LABEL.DRY,
  탄력: LABEL.ELASTIC,
} as const;

export default function CategoryTabs() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);
  const { data } = useDiagnoseInfo({ diagnoseId: 1 });

  const handleCategoryClick = (category: string) => {
    console.log(category);
    const diagnoseType = categoryToDiagnoseType[category as keyof typeof categoryToDiagnoseType];
    const level = data?.totalResult?.[diagnoseType] || STATUS.CLEAR;

    if (!diagnoseType || !level) {
      console.log(diagnoseType, level);
      return;
    }

    dispatch(
      setQuery({
        ...selectedQuery,
        diagnoseType,
        level,
      }),
    );
  };

  return (
    <S.Tabs>
      {categories.map((category) => (
        <S.Tab key={category} $isActive={selectedQuery.diagnoseType === categoryToDiagnoseType[category]} onClick={() => handleCategoryClick(category)}>
          {category}
        </S.Tab>
      ))}
    </S.Tabs>
  );
}
