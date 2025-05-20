import * as S from './recommendationSection.style';

import HeartIcon from '@/assets/icons/white_heart.svg?react';

type TProductCardProps = {
  category: string;
  name: string;
  price: number;
  ingredients: string[];
  imageUrl?: string;
  liked?: boolean;
};

export default function ProductCard({ category, name, price, ingredients, imageUrl, liked = false }: TProductCardProps) {
  return (
    <S.Card>
      <S.Badge>{category}</S.Badge>
      <S.ImageArea>
        {imageUrl ? <img src={imageUrl} alt={name} /> : <span>사진</span>}
        <S.LikeButton $isLiked={liked}>
          <HeartIcon />
        </S.LikeButton>
      </S.ImageArea>

      <S.Info>
        <S.ProductName>{name}</S.ProductName>
        <S.Price>{price.toLocaleString()}원</S.Price>
        <S.Ingredients>
          {ingredients.map((i) => (
            <S.IngredientTag key={i}>{i}</S.IngredientTag>
          ))}
        </S.Ingredients>
      </S.Info>
    </S.Card>
  );
}
