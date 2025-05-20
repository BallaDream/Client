import { useEffect, useRef } from 'react';

import { useDiagnoseInfo } from '@/hooks/useDiagnoseInfo';

import ProductList from '@/components/resultPage/recommendationSection/productList';

import CategoryTabs from './categoryTaps';
import Description from './description';
import FilterControl from './filterControl';
import * as S from './recommendationSection.style';
import HeaderText from '../headerText/headerText';

import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch } from '@/store/hooks';

export default function RecommendationSection() {
  const { data } = useDiagnoseInfo({ diagnoseId: 2 });
  const dispatch = useAppDispatch();

  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (!hasInitializedRef.current && data?.totalResult) {
      const defaultType = 'PIGMENT';
      const defaultLevel = data.totalResult[defaultType];

      dispatch(
        setQuery({
          diagnoseType: defaultType,
          level: defaultLevel,
          step: 0,
          minPrice: undefined,
          maxPrice: undefined,
          formulation: undefined,
        }),
      );

      hasInitializedRef.current = true;
    }
  }, [data]);

  return (
    <S.Container>
      <HeaderText text="닉네임 님의 추천 화장품" />
      {/* 카테고리 탭 */}
      <CategoryTabs />

      {/* 설명 & 필터컨트롤 */}
      <S.DescriptionGrid>
        <Description />
        <FilterControl />
      </S.DescriptionGrid>

      {/* 화장품 추천 */}
      <ProductList />
    </S.Container>
  );
}
