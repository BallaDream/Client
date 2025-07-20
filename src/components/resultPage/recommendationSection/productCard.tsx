import { useCallback } from 'react';

import { allowedIngredients } from '@/constants/terms';
import type { LABEL } from '@/enums/enums';

import { getLabel } from '@/utils/map';

import { useToggleInterest } from '@/hooks/useToggleInterest';

import * as S from './recommendationSection.style';

import HeartIcon from '@/assets/icons/white_heart.svg?react';
import { useAppSelector } from '@/store/hooks';

type TProductCardProps = {
  productId: number;
  formulation: string;
  productName: string;
  price: number;
  element: string[];
  imageLink?: string;
  interest?: boolean;
  diagnoseType?: LABEL[];
};

export default function ProductCard({ productId, formulation, productName, price, element, imageLink, interest = true, diagnoseType }: TProductCardProps) {
  // 좋아요 토글 훅
  const { mutate: toggleInterest } = useToggleInterest();
  const nDiagnoseType = useAppSelector((state) => state.recommendation.selectedQuery.diagnoseType);

  // 좋아요 해제시 진단타입이 있을 때만 확인 팝업
  const handleToggleInterest = useCallback(() => {
    if (interest && diagnoseType && diagnoseType.length > 0) {
      const confirmResult = window.confirm('관심상품에서 해제하시겠습니까?');
      if (!confirmResult) return;
    }
    toggleInterest({
      productId,
      diagnoseType: nDiagnoseType,
      isInterest: interest,
    });
  }, [interest, diagnoseType, toggleInterest, productId, nDiagnoseType]);

  return (
    <S.Card>
      <S.Badge>{formulation}</S.Badge>
      <S.ImageArea>
        {imageLink ? <img src={imageLink} alt={productName} /> : <span>사진</span>}
        <S.LikeButton $isLiked={interest} onClick={handleToggleInterest}>
          <HeartIcon />
        </S.LikeButton>
      </S.ImageArea>

      <S.Info>
        <S.ProductName>{productName}</S.ProductName>
        <S.Price>{Number(price).toLocaleString()}원</S.Price>
        <S.Ingredients>
          {element
            .filter((i) => allowedIngredients.includes(i))
            .slice(0, 3)
            .map((i) => (
              <S.IngredientTag key={i}>{i}</S.IngredientTag>
            ))}
        </S.Ingredients>
        {diagnoseType && (
          <S.Ingredients style={{ marginTop: 4 }}>
            {diagnoseType.map((i) => (
              <S.ColoredIngredients key={i}>{getLabel(i)}</S.ColoredIngredients>
            ))}
          </S.Ingredients>
        )}
      </S.Info>
    </S.Card>
  );
}
