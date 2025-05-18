import { useState } from 'react';
import * as S from './header.style';
import LogoIcon from '@/assets/icons/logo_header.svg?react';
import LoginModal from '@/components/common/modal/loginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginIconClick = () => {
    setIsLoginModalOpen(true); // 실제 로그인 구현 전이라 조건 없이 모달 띄움
  };

  return (
    <>
      <S.Container>
        <S.Content>
          <LogoIcon />
          <S.LoginIcon onClick={handleLoginIconClick} />
        </S.Content>
      </S.Container>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}

/* 원래 모달 없기 전 코드
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
  */
