import * as S from './header.style';
import LogoIcon from '@/assets/icons/logo_header.svg?react';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <LogoIcon />
        <S.LoginIcon />
      </S.Content>
    </S.Container>
  );
}
