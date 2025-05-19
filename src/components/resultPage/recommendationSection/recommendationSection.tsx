import ProductList from '@/components/resultPage/recommendationSection/productList';

import CategoryTabs from './categoryTaps';
import Description from './description';
import FilterControl from './filterControl';
import * as S from './recommendationSection.style';
import HeaderText from '../headerText/headerText';

export default function RecommendationSection() {
  return (
    <S.Container>
      <HeaderText text="닉네임" />
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
