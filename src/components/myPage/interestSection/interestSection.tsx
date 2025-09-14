import { useEffect, useRef } from 'react';

import { useInterestedProducts } from '@/hooks/useInterestedProducts';

import ProductCard from '@/components/resultPage/recommendationSection/productCard';
import ProductCardSkeleton from '@/components/resultPage/recommendationSection/ProductCardSkeleton';

import * as S from './interestSection.style';

import HeartTextIcon from '@/assets/icons/HeartText.svg?react';

export default function InterestSection() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInterestedProducts();

  const observerRef = useRef<HTMLDivElement | null>(null); //무한 스크롤

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  const allProducts = data?.pages.flatMap((page) => page.data) || [];

  return (
    <S.Container>
      <span style={{ fontSize: 30, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
        <HeartTextIcon />
        관심 제품
      </span>

      {isLoading ? (
        <S.CardList>
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </S.CardList>
      ) : allProducts.length === 0 ? (
        <S.EmptyText>💡 아직 저장한 관심 화장품이 없어요! 추천제품에서 하트를 눌러 저장해보세요.</S.EmptyText>
      ) : (
        <S.CardList>
          {allProducts.map((product) => (
            <ProductCard key={product.productId} {...product} />
          ))}
          <div ref={observerRef} style={{ height: 1 }} />
        </S.CardList>
      )}
    </S.Container>
  );
}
