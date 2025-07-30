import { useLocation, useNavigate } from 'react-router-dom';

import { useLogout } from '@/hooks/useLogout';

import Profile from './profile';
import * as S from './sidebar.style';

import ArrowRightIcon from '@/assets/icons/arrow_right.svg?react';
import LogoEng from '@/assets/icons/eng_logo.svg?react';

type TMenuItem = {
  name: string;
  route: string;
};

const menuItems: TMenuItem[] = [
  { name: '회원정보', route: '/my/0' },
  { name: '추천이력', route: '/my/1' },
  { name: '관심제품', route: '/my/2' },
  { name: '로그아웃', route: '/' },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { mutate: logoutMutate } = useLogout();

  const handleMenuItemClick = (index: number) => {
    if (index === 3) {
      logoutMutate();
      return;
    }
    navigate(`/my/${index}`);
  };

  return (
    <S.Container>
      {/* 상단 */}
      <section>
        <Profile />
        <S.MenuContainer>
          {menuItems.map((item, index) => {
            const isActive = currentPath === item.route;

            return (
              <S.MenuItemWrapper key={item.route} onClick={() => handleMenuItemClick(index)}>
                {isActive && (
                  <S.Icon>
                    <ArrowRightIcon />
                  </S.Icon>
                )}
                <S.MenuItem $isActive={isActive}>{item.name}</S.MenuItem>
                {isActive && <S.Underline />}
              </S.MenuItemWrapper>
            );
          })}
        </S.MenuContainer>
      </section>
      {/* 하단 */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '32px' }}>
        <S.Divider />
        <div>
          <S.MenuButtonText onClick={() => navigate('/')}>홈</S.MenuButtonText>
          <span>|&nbsp;&nbsp;</span>
          <S.MenuButtonText onClick={() => navigate('/leave')}>회원탈퇴</S.MenuButtonText>
        </div>
        <LogoEng />
      </section>
    </S.Container>
  );
}

export default Sidebar;
