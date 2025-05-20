import { useState } from 'react';

import { TERMS_1, TERMS_2 } from '@/constants/terms';

import * as S from './signupForm.style';

export default function SignupForm() {
  const [form, setForm] = useState({
    id: '',
    password: '',
    email: '',
    code: '',
  });

  const [checked, setChecked] = useState({
    terms1: false,
    terms2: false,
  });

  const isFormValid =
    form.id.trim() !== '' && form.password.trim() !== '' && form.email.trim() !== '' && form.code.trim() !== '' && checked.terms1 && checked.terms2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    console.log('회원가입 정보:', form);
    // 추후 API 연동
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Title>일반 회원가입</S.Title>

        <S.InputGroup>
          <S.Input name="id" placeholder="아이디" value={form.id} onChange={handleChange} />
          <S.Input name="password" type="password" placeholder="비밀번호" value={form.password} onChange={handleChange} />
        </S.InputGroup>

        <S.InputGroup>
          <S.InputWrapper>
            <S.Input name="email" placeholder="이메일주소" value={form.email} onChange={handleChange} />
            <S.InputButton>전송</S.InputButton>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input name="code" placeholder="인증번호" value={form.code} onChange={handleChange} />
            <S.InputButton>확인</S.InputButton>
          </S.InputWrapper>
        </S.InputGroup>

        <S.CheckboxWrap>
          <label>
            <input type="checkbox" name="terms1" checked={checked.terms1} onChange={handleCheckbox} />
            <b>[필수] 이용약관 동의</b>
          </label>
          <S.TermBox>{TERMS_1}</S.TermBox>

          <label>
            <input type="checkbox" name="terms2" checked={checked.terms2} onChange={handleCheckbox} />
            <b>[필수] 개인정보 수집 이용 동의</b>
          </label>
          <S.TermBox>{TERMS_2}</S.TermBox>
        </S.CheckboxWrap>

        <S.SubmitButton disabled={!isFormValid} onClick={handleSubmit}>
          약관동의 후 가입하기
        </S.SubmitButton>
      </S.Container>
    </S.PageWrapper>
  );
}
