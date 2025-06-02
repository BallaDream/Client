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
};

export default function ProductCard({ productId, formulation, productName, price, element, imageLink, interest = false }: TProductCardProps) {
  // 좋아요 토글 훅
  const { mutate: toggleInterest } = useToggleInterest();
  const diagnoseType = useAppSelector((state) => state.recommendation.selectedQuery.diagnoseType);
  const handleToggleInterest = () => {
    toggleInterest({
      productId,
      diagnoseType,
      isInterest: interest,
    });
  };
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
        <S.Price>{price.toLocaleString()}원</S.Price>
        <S.Ingredients>
          {element.slice(0, 3).map((i) => (
            <S.IngredientTag key={i}>{i}</S.IngredientTag>
          ))}
        </S.Ingredients>
      </S.Info>
    </S.Card>
  );
}
