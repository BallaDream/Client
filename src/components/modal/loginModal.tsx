import type { MouseEvent } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { jwtDecode } from 'jwt-decode';

import { useLogin } from '@/hooks/useLogin';

import { loginSchema } from './loginModal.schema';
import * as S from './loginModal.style';

import EngLogo from '@/assets/icons/eng_logo.svg?react';
import XIcon from '@/assets/icons/x_gray.svg?react';
import { setLogin } from '@/slices/authSlice';
import { closeModal } from '@/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

interface IFormValues {
  username: string;
  password: string;
}

export default function LoginModal() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate: loginMutate, isPending } = useLogin();
  const [errorMessage, setErrorMessage] = useState('');

  const modalType = useAppSelector((state) => state.modal.modalType);
  const modalRoot = document.getElementById('modal-root');
  if (modalType !== 'login' || !modalRoot) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  const handleSignup = () => {
    dispatch(closeModal());
    navigate('/signup');
  };

  const onSubmit = (data: IFormValues) => {
    setErrorMessage('');
    loginMutate(data, {
      onSuccess: (res) => {
        const accessToken = res.headers.access;
        if (!accessToken) {
          setErrorMessage('accessToken이 존재하지 않습니다.');
          return;
        }
        try {
          const decoded: any = jwtDecode(accessToken);
          const nickname = decoded?.nickname || '사용자';

          dispatch(setLogin({ accessToken, nickname }));
          dispatch(closeModal());
          console.log('로그인 성공!');
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

  return createPortal(
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={() => dispatch(closeModal())}>
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
        <S.SignupWrap onClick={handleSignup}>
          <span>아직 BALLADREAM의 회원이 아니신가요?</span>
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
    </S.Overlay>,
    modalRoot,
  );
}
