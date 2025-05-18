import * as S from './loginModal.style';
import XIcon from '@/assets/icons/x_gray.svg?react';
import EngLogo from '@/assets/icons/eng_logo.svg?react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
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
          <S.SignupButton>회원가입</S.SignupButton>
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
