import { useNavigate } from 'react-router-dom';

import * as S from './bottomActionBar.style';

import HeartIcon from '@/assets/icons/heart.svg?react';
import RedoIcon from '@/assets/icons/redo.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';

export default function BottomActionBar() {
  const navigate = useNavigate();
  const handleRedo = () => {
    navigate('/upload');
  };
  return (
    <S.Container>
      <S.CustomButton $direction="left" onClick={handleRedo}>
        <RedoIcon />
        다시 진단하기
      </S.CustomButton>
      <S.CustomButton $direction="center">
        <ShareIcon />
        공유하기
      </S.CustomButton>
      <S.CustomButton $direction="right">
        <HeartIcon />
        관심제품 보러가기
      </S.CustomButton>
    </S.Container>
  );
}
