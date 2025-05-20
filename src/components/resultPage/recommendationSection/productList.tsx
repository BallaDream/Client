import { useProductInfo } from '@/hooks/useProductInfo';

import ProductCard from './productCard';
import * as S from './recommendationSection.style';

import LeftCircleIcon from '@/assets/icons/left_circle.svg?react';
import RightCircleIcon from '@/assets/icons/right_circle.svg?react';

export default function ProductList() {
  const { data } = useProductInfo({ diagnoseType: 'DRY', level: 'CLEAR', step: 0, minPrice: 3000, maxPrice: 15000, formulation: '립밤' });
  if (!data) return <></>;
  console.log(data.data);
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
