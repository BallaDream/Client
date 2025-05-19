import * as S from './recommendationSection.style';

import { setCategory } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const categories = ['색소침착', '주름', '모공', '수분', '탄력'] as const;

export default function CategoryTabs() {
  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector((state) => state.recommendation);
  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category as any));
  };
  return (
    <S.Tabs>
      {categories.map((category) => (
        <S.Tab key={category} isActive={selectedCategory === category} onClick={() => handleCategoryClick(category)}>
          {category}
        </S.Tab>
      ))}
    </S.Tabs>
  );
}
