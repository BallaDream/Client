import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginModal from '@/components/common/modal/loginModal';

import * as S from './header.style';

import LogoIcon from '@/assets/icons/logo_header.svg?react';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginIconClick = () => {
    setIsLoginModalOpen(true); // 실제 로그인 구현 전이라 조건 없이 모달 띄움
  };

  return (
    <>
      <S.Container>
        <S.Content>
          <Link to="/">
            <LogoIcon />
          </Link>
          <S.LoginIcon onClick={handleLoginIconClick} />
        </S.Content>
      </S.Container>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
