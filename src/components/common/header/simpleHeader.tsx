import { useNavigate } from 'react-router-dom';

import * as S from '@/components/common/header/simpleHeader.style';

import LogoIcon from '@/assets/icons/Logo_blue.svg?react';

export default function SimpleHeader() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrapper onClick={() => navigate('/')}>
        <LogoIcon />
      </S.LogoWrapper>
    </S.Container>
  );
}
