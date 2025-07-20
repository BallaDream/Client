import { useEffect, useRef } from 'react';

import { useInterestedProducts } from '@/hooks/useInterestedProducts';

import ProductCard from '@/components/resultPage/recommendationSection/productCard';

import * as S from './interestSection.style';

import HeartTextIcon from '@/assets/icons/HeartText.svg?react';

export default function InterestSection() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInterestedProducts();
  const observerRef = useRef<HTMLDivElement | null>(null);

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

      <S.CardList>
        {allProducts.map((product) => (
          <ProductCard key={product.productId} {...product} />
        ))}
      </S.CardList>

      {/* 무한 스크롤 감지용 div */}
      <div ref={observerRef} style={{ height: 1 }} />
    </S.Container>
  );
}
