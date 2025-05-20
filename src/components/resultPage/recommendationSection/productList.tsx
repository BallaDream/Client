import ProductCard from './productCard';
import * as S from './recommendationSection.style';

import LeftCircleIcon from '@/assets/icons/left_circle.svg?react';
import RightCircleIcon from '@/assets/icons/right_circle.svg?react';

const dummyProducts = [
  {
    category: '토너',
    name: '촉촉한 토너',
    price: 26000,
    ingredients: ['히알루론산', '판테놀', '알로에베라'],
    imageUrl: '',
    liked: false,
  },
  {
    category: '에센스',
    name: '광채 에센스',
    price: 32000,
    ingredients: ['나이아신아마이드', '녹차추출물'],
    imageUrl: '',
    liked: true,
  },
  {
    category: '크림',
    name: '수분 가득 크림',
    price: 28000,
    ingredients: ['세라마이드', '시어버터', '비타민E'],
    imageUrl: '',
    liked: false,
  },
  {
    category: '클렌저',
    name: '저자극 클렌징폼',
    price: 15000,
    ingredients: ['녹차', '병풀추출물'],
    imageUrl: '',
    liked: false,
  },
];

export default function ProductList() {
  return (
    <S.ProductList>
      <S.ProductListButton style={{ left: '20px' }} $enabled={false}>
        <LeftCircleIcon />
      </S.ProductListButton>
      {dummyProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
      <S.ProductListButton style={{ right: '20px' }} $enabled={true}>
        <RightCircleIcon />
      </S.ProductListButton>
    </S.ProductList>
  );
}
