import { useNavigate } from 'react-router-dom';

import * as S from './header.style';

import { axiosInstance } from '@/api/axiosInstance';
import LogoIcon from '@/assets/icons/Logo_blue.svg?react';
import { logout } from '@/slices/authSlice';
import { openModal } from '@/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const nickname = useAppSelector((state) => state.auth.nickname);
  const isLoggedIn = !!accessToken;

  const handleLoginIconClick = () => {
    if (isLoggedIn) {
      navigate('/mypage');
    } else {
      dispatch(openModal('login'));
    }
  };

  const handleLogoIconClick = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/logout');
      alert('로그아웃 되었습니다.');
    } catch (error) {
      console.error('❌ 로그아웃 실패:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    } finally {
      dispatch(logout());
    }
  };

  return (
    <S.Container>
      <S.LogoWrapper onClick={handleLogoIconClick}>
        <LogoIcon />
      </S.LogoWrapper>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {isLoggedIn && (
          <>
            <span style={{ color: 'white', fontSize: '14px' }}>{nickname}님</span>
            <S.LogoutText onClick={handleLogout}>로그아웃</S.LogoutText>
          </>
        )}
        <S.LoginIcon onClick={handleLoginIconClick} />
      </div>
    </S.Container>
  );
}
