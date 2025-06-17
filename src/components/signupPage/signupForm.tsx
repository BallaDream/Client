import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { TERMS_1, TERMS_2 } from '@/constants/terms';

import { useCheckEmailCode, useRequestEmailCode, useSignup } from '@/hooks/useSignup';

import { signupSchema } from './signupForm.schema';
import * as S from './signupForm.style';
import SpinnerOverlay from '../common/overlay/SpinnerOverlay';

interface IFormValues {
  username: string;
  password: string;
  authNum: string;
  terms1: boolean;
  terms2: boolean;
}

export default function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  });

  const { mutate: sendEmailCode, isPending: isSending } = useRequestEmailCode();
  const { mutate: signupMutate, isPending: isSigningUp } = useSignup();
  const { mutate: checkCode, isPending: isChecking } = useCheckEmailCode();
  const [isVerified, setIsVerified] = useState(false);
  const isLoading = isSending || isChecking || isSigningUp;

  // 인증번호 전송
  const handleRequestCode = () => {
    const email = getValues('username');
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    sendEmailCode(
      { username: email },
      {
        onSuccess: (res) => {
          alert(res.message || '인증번호가 전송되었습니다.');
          setIsVerified(true);
        },
        onError: (err: any) => {
          alert(err.response?.data?.message || '인증번호 요청 실패');
        },
      },
    );
  };

  // 인증번호 확인
  const handleCheckCode = () => {
    const { username, authNum } = getValues();
    if (!username || !authNum) {
      alert('이메일과 인증번호를 모두 입력해주세요.');
      return;
    }

    checkCode(
      { username, authNum },
      {
        onSuccess: (res) => {
          alert(res.message || '인증 성공');
        },
        onError: (err: any) => {
          alert(err.response?.data?.message || '인증 실패');
        },
      },
    );
  };

  // 회원가입 제출
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    signupMutate(
      {
        username: data.username,
        password: data.password,
        authNum: data.authNum,
      },
      {
        onSuccess: () => {
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        },
        onError: (err: any) => {
          alert(err.response?.data?.message || '회원가입에 실패했습니다.');
        },
      },
    );
  };

  return (
    <S.PageWrapper>
      {isLoading && <SpinnerOverlay text="잠시만 기다려 주세요" />}
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Title>일반 회원가입</S.Title>

        {/* 이메일 */}
        <S.InputGroup>
          <S.InputWrapper>
            <S.Input type="text" placeholder="아이디(이메일주소)" {...register('username')} autoComplete="off" />
            <S.InputButton type="button" onClick={handleRequestCode} disabled={!!errors.username || !getValues('username') || isSending}>
              전송
            </S.InputButton>
          </S.InputWrapper>
          {errors.username && <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>}
        </S.InputGroup>

        {/* 인증번호 */}
        <S.InputGroup>
          <S.InputWrapper>
            <S.Input type="text" placeholder="인증번호" {...register('authNum')} />
            <S.InputButton
              type="button"
              onClick={handleCheckCode}
              disabled={!!errors.username || !!errors.authNum || !getValues('username') || !getValues('authNum') || isChecking}
            >
              확인
            </S.InputButton>
          </S.InputWrapper>
          {errors.authNum && <S.ErrorMessage>{errors.authNum.message}</S.ErrorMessage>}
        </S.InputGroup>

        {/* 비밀번호 */}
        <S.InputGroup>
          <S.Input type="password" placeholder="비밀번호" {...register('password')} />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.InputGroup>

        {/* 약관 */}
        <S.CheckboxWrap>
          <label>
            <input type="checkbox" {...register('terms1')} />
            <b>[필수] 이용약관 동의</b>
          </label>
          {errors.terms1 && <S.ErrorMessage>{errors.terms1.message}</S.ErrorMessage>}
          <S.TermBox>{TERMS_1}</S.TermBox>

          <label>
            <input type="checkbox" {...register('terms2')} />
            <b>[필수] 개인정보 수집 이용 동의</b>
          </label>
          {errors.terms2 && <S.ErrorMessage>{errors.terms2.message}</S.ErrorMessage>}
          <S.TermBox>{TERMS_2}</S.TermBox>
        </S.CheckboxWrap>

        {/* 약관 */}
        <S.SubmitButton type="submit" disabled={!isValid || isSigningUp || !isVerified}>
          약관동의 후 가입하기
        </S.SubmitButton>
      </S.Container>
    </S.PageWrapper>
  );
}
