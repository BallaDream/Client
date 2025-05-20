import * as S from './recommendationSection.style';

import HeartIcon from '@/assets/icons/white_heart.svg?react';

type TProductCardProps = {
  formulation: string;
  productName: string;
  price: number;
  element: string[];
  imageLink?: string;
  interest?: boolean;
};

export default function ProductCard({ formulation, productName, price, element, imageLink, interest = false }: TProductCardProps) {
  return (
    <S.Card>
      <S.Badge>{formulation}</S.Badge>
      <S.ImageArea>
        {imageLink ? <img src={imageLink} alt={productName} /> : <span>사진</span>}
        <S.LikeButton $isLiked={interest}>
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
