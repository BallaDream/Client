// header.tsx
import { useLocation, useNavigate } from 'react-router-dom';

import { useLogout } from '@/hooks/useLogout';

import * as S from './header.style';

import LogoIcon from '@/assets/icons/Logo_blue.svg?react';
import { openModal } from '@/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const nickname = useAppSelector((state) => state.auth.nickname);
  const isLoggedIn = !!accessToken;

  const { mutate: logout } = useLogout();

  const handleLoginIconClick = () => {
    if (isLoggedIn) {
      navigate('/my');
    } else {
      dispatch(openModal('login'));
    }
  };

  const handleLogoIconClick = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    logout();
  };

  const isLeavePage = location.pathname === '/leave' || location.pathname === '/leave-complete';

  return (
    <S.Container>
      {/* 왼쪽 로고 */}
      <S.LogoWrapper onClick={handleLogoIconClick}>
        <LogoIcon />
      </S.LogoWrapper>

      {/* 오른쪽 - /leave 페이지는 생략 */}
      {!isLeavePage &&
        (isLoggedIn ? (
          <S.RightSection>
            <div style={{ display: 'flex', gap: '2px', cursor: 'pointer' }} onClick={handleLoginIconClick}>
              <S.LoginIcon />
              <S.Text>{nickname}님</S.Text>
            </div>
            <S.LogoutText onClick={handleLogout}>로그아웃</S.LogoutText>
          </S.RightSection>
        ) : (
          <S.LoginIcon onClick={handleLoginIconClick} />
        ))}
    </S.Container>
  );
}
