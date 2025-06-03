import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { jwtDecode } from 'jwt-decode';

import { useLogin } from '@/hooks/useLogin';

import { loginSchema } from './loginModal.schema';
import * as S from './loginModal.style';

import EngLogo from '@/assets/icons/eng_logo.svg?react';
import XIcon from '@/assets/icons/x_gray.svg?react';
import { setAccessToken, setNickname } from '@/slices/authSlice';
import { useAppDispatch } from '@/store/hooks';

const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface FormValues {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: IProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate: loginMutate, isPending } = useLogin();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSignup = () => {
    onClose();
    navigate('/signup');
  };

  const onSubmit = (data: FormValues) => {
    setErrorMessage('');
    loginMutate(data, {
      onSuccess: (res) => {
        const accessToken = res.headers['access'];
        if (!accessToken) {
          setErrorMessage('accessToken이 존재하지 않습니다.');
          return;
        }
        try {
          const decoded: any = jwtDecode(accessToken);
          const nickname = decoded?.nickname || '사용자';
          localStorage.setItem('accessToken', accessToken);
          dispatch(setAccessToken(accessToken));
          dispatch(setNickname(nickname));
          onClose();
          alert('로그인 성공!');
        } catch {
          setErrorMessage('토큰 디코딩에 실패했습니다.');
        }
      },
      onError: (err: any) => {
        const msg = err.response?.data?.message || '로그인에 실패했습니다.';
        setErrorMessage(msg);
      },
    });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="text" placeholder="아이디" {...register('username')} />
          {errors.username && <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>}
          <S.Input type="password" placeholder="비밀번호" {...register('password')} />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          <S.ForgotPassword>비밀번호를 잊으셨나요?</S.ForgotPassword>
          <S.LoginButton type="submit" disabled={isPending}>
            로그인
          </S.LoginButton>
        </form>
        <S.SignupWrap>
          <span>아직 BALLADREAM의 회원이 아니신가요?</span>
          <S.SignupButton onClick={handleSignup}>회원가입</S.SignupButton>
        </S.SignupWrap>
        <S.DividerWrap>
          <S.Line /> <S.Or>또는</S.Or> <S.Line />
        </S.DividerWrap>
        <S.SnsLabel>소셜 로그인</S.SnsLabel>
        <S.SnsDesc>SNS 계정으로 간편하게 로그인 하세요.</S.SnsDesc>
        <S.KakaoButton
          src="/img/btn_kakao.png"
          alt="카카오 로그인"
          onClick={() => {
            window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
          }}
        />
      </S.Modal>
    </S.Overlay>
  );
}
