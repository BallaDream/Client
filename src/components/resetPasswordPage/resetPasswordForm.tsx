import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRequestAuthCode, useResetPassword, useVerifyAuthCode } from '@/hooks/useResetPassword';

import SpinnerOverlay from '@/components/common/overlay/SpinnerOverlay';

import { resetPasswordSchema } from './resetPasswordForm.schema';
import * as S from './resetPasswordForm.style';

import EngLogo from '@/assets/icons/eng_logo.svg?react';

interface IFormValues {
  email: string;
  authNumber: string;
  newPassword: string;
}

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange',
  });

  const requestAuthCodeMutation = useRequestAuthCode();
  const verifyAuthCodeMutation = useVerifyAuthCode();
  const resetPasswordMutation = useResetPassword();

  const handleRequestCode = async () => {
    const email = getValues('email');
    if (!email) return alert('이메일을 입력해주세요.');
    setIsLoading(true);
    try {
      await requestAuthCodeMutation.mutateAsync(email);
      alert('인증번호가 전송되었습니다.');
    } catch (error: any) {
      alert(error.response?.data?.message || '인증번호 전송에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckCode = async () => {
    const { email, authNumber } = getValues();
    if (!email || !authNumber) return alert('이메일과 인증번호를 모두 입력해주세요.');
    setIsLoading(true);
    try {
      await verifyAuthCodeMutation.mutateAsync({ email, authNum: authNumber });
      alert('인증이 완료되었습니다.');
      setIsVerified(true);
    } catch (error: any) {
      alert(error.response?.data?.message || '인증번호 확인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    setIsLoading(true);
    try {
      await resetPasswordMutation.mutateAsync({
        username: data.email,
        password: data.newPassword,
        authNum: data.authNumber,
      });
      alert('비밀번호가 재설정되었습니다.');
      navigate('/');
    } catch (error: any) {
      alert(error.response?.data?.message || '비밀번호 재설정에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.PageWrapper>
      {isLoading && <SpinnerOverlay text="잠시만 기다려 주세요" />}
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Title>비밀번호를 잊어버리셨나요?</S.Title>
        <S.LogoWrapper>
          <EngLogo />
        </S.LogoWrapper>
        <S.Description>
          웹으로 회원가입한 사용자 대상으로만 재설정 가능합니다. <br />
          <b>BallaDream</b>에 가입했던 이메일을 입력해주세요. <br />
          비밀번호 재설정 인증번호를 보내드립니다.
        </S.Description>

        <S.InputGroup>
          <S.InputWrapper>
            <S.Input type="email" placeholder="아이디(이메일주소)" {...register('email')} />
            <S.InputButton type="button" onClick={handleRequestCode} disabled={!getValues('email')}>
              전송
            </S.InputButton>
          </S.InputWrapper>
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputWrapper>
            <S.Input type="text" placeholder="인증번호" {...register('authNumber')} />
            <S.InputButton type="button" onClick={handleCheckCode} disabled={!getValues('authNumber')}>
              확인
            </S.InputButton>
          </S.InputWrapper>
          {errors.authNumber && <S.ErrorMessage>{errors.authNumber.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.PasswordGuide>비밀번호는 8자 이상이어야 합니다.</S.PasswordGuide>
        <S.InputGroup>
          <S.Input type="password" placeholder="새 비밀번호" {...register('newPassword')} />
          {errors.newPassword && <S.ErrorMessage>{errors.newPassword.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.SubmitButton type="submit" disabled={!isValid || !isVerified}>
          비밀번호 재설정하기
        </S.SubmitButton>
      </S.Container>
    </S.PageWrapper>
  );
}
