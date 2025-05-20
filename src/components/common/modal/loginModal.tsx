import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './loginModal.style';

import EngLogo from '@/assets/icons/eng_logo.svg?react';
import XIcon from '@/assets/icons/x_gray.svg?react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: IProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSignup = () => {
    onClose(); // 모달 닫고
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <XIcon />
        </S.CloseButton>

        <S.Title>로그인</S.Title>

        <S.LogoWrapper>
          <EngLogo />
        </S.LogoWrapper>

        <S.Input type="text" placeholder="아이디" />
        <S.Input type="password" placeholder="비밀번호" />

        <S.ForgotPassword>비밀번호를 잊으셨나요?</S.ForgotPassword>

        <S.LoginButton>로그인</S.LoginButton>

        <S.SignupWrap>
          <span>아직 BALLADREAM의 회원이 아니신가요?</span>
          <S.SignupButton onClick={handleSignup}>회원가입</S.SignupButton>
        </S.SignupWrap>

        <S.DividerWrap>
          <S.Line />
          <S.Or>또는</S.Or>
          <S.Line />
        </S.DividerWrap>

        <S.SnsLabel>소셜 로그인</S.SnsLabel>
        <S.SnsDesc>SNS 계정으로 간편하게 로그인 하세요.</S.SnsDesc>

        <S.KakaoButton src="/img/btn_kakao.png" alt="카카오 로그인" />
      </S.Modal>
    </S.Overlay>
  );
}
