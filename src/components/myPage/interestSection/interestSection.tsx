import { LABEL } from '@/enums/enums';

import ProductCard from '@/components/resultPage/recommendationSection/productCard';

import * as S from './interestSection.style';

import HeartTextIcon from '@/assets/icons/HeartText.svg?react';
import { useInterestedProducts } from '@/hooks/useInterestedProducts';

const mockData = [
  {
    productId: 1,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    interest: true,
    element: ['피부 타입'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 2,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 3,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입', '히알루론산', '판테놀'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 4,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 5,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 6,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.PORE],
  },
  {
    productId: 7,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
  {
    productId: 8,
    formulation: '피부 타입',
    productName: '피부 타입',
    price: 10000,
    element: ['피부 타입'],
    diagnoseType: [LABEL.DRY, LABEL.PIGMENT, LABEL.WRINKLE, LABEL.ELASTIC, LABEL.ACNE, LABEL.PORE],
  },
];
export default function InterestSection() {
  const { data: interestedProducts } = useInterestedProducts();
  return (
    <S.Container>
      <span style={{ fontSize: 30, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
        <HeartTextIcon />
        관심 제품
      </span>
      <S.CardList>
        {mockData.map((data) => (
          <ProductCard key={data.productId} {...data} />
        ))}
      </S.CardList>
    </S.Container>
  );
}
