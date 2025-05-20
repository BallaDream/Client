import { useProductInfo } from '@/hooks/useProductInfo';

import ProductCard from './productCard';
import * as S from './recommendationSection.style';

import LeftCircleIcon from '@/assets/icons/left_circle.svg?react';
import RightCircleIcon from '@/assets/icons/right_circle.svg?react';
import { useAppSelector } from '@/store/hooks';

export default function ProductList() {
  const selectedQuery = useAppSelector((state) => state.recommendation.selectedQuery);
  const { data } = useProductInfo(selectedQuery);
  if (!data) return <></>;

  return (
    <S.ProductList>
      <S.ProductListButton style={{ left: '20px' }} $enabled={false}>
        <LeftCircleIcon />
      </S.ProductListButton>
      {data.data.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
      <S.ProductListButton style={{ right: '20px' }} $enabled={true}>
        <RightCircleIcon />
      </S.ProductListButton>
    </S.ProductList>
  );
}
