import * as S from './recommendationSection.style';

import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const categories = ['색소침착', '주름', '모공', '수분', '탄력'] as const;

export default function CategoryTabs() {
  const dispatch = useAppDispatch();
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);

  const handleCategoryClick = (category: string) => {
    dispatch(setQuery({ ...selectedQuery, diagnoseType: category }));
  };

  return (
    <S.Tabs>
      {categories.map((category) => (
        <S.Tab key={category} isActive={selectedQuery.diagnoseType === category} onClick={() => handleCategoryClick(category)}>
          {category}
        </S.Tab>
      ))}
    </S.Tabs>
  );
}
