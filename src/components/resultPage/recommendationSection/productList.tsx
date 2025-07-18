import { useProductInfo } from '@/hooks/useProductInfo';

import ProductCard from './productCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import * as S from './recommendationSection.style';

import LeftCircleIcon from '@/assets/icons/left_circle.svg?react';
import RightCircleIcon from '@/assets/icons/right_circle.svg?react';
import { setQuery } from '@/slices/recommandationSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function ProductList() {
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);
  const dispatch = useAppDispatch();
  const { data, isPlaceholderData } = useProductInfo(selectedQuery);

  const handlePrev = () => {
    if (selectedQuery.step > 0) {
      dispatch(setQuery({ ...selectedQuery, step: selectedQuery.step - 1 }));
    }
  };

  const handleNext = () => {
    dispatch(setQuery({ ...selectedQuery, step: selectedQuery.step + 1 }));
  };

  if (!data) return <></>;
  const isPrevEnabled = selectedQuery.step > 0;
  const isNextEnabled = data?.data?.length >= 5 && data?.hasNextPage;
  return (
    <S.ProductList>
      {/* 이전 */}
      <S.ProductListButton disabled={!isPrevEnabled} style={{ left: '20px' }} $enabled={isPrevEnabled} onClick={handlePrev}>
        <LeftCircleIcon />
      </S.ProductListButton>
      {/* 카드리스트 */}
      {isPlaceholderData
        ? Array.from({ length: 5 }).map((_, index) => <ProductCardSkeleton key={index} />)
        : data?.data?.map((product, index) => <ProductCard key={index} {...product} />)}
      {data?.data?.length == 0 && (
        <S.EmptyText>
          <p>추천할 화장품이 없습니다...</p>
        </S.EmptyText>
      )}
      {/* 다음 */}
      <S.ProductListButton disabled={isPlaceholderData || !isNextEnabled} style={{ right: '20px' }} $enabled={isNextEnabled} onClick={handleNext}>
        <RightCircleIcon />
      </S.ProductListButton>
    </S.ProductList>
  );
}
